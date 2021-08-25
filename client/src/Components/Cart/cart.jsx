import {
    IconButton,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    ListItem,
    Button,
    Box,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import CreateOrder from "../Orders/CreateOrder/createOrder";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoupons } from "../../Redux/Coupon/couponActions"
import "./cart.css"
import jwt from "jsonwebtoken";



const useStyles = makeStyles((theme) => ({
    details: {
        textAlign: "start",
        width: "60%",
        variant: "outlined",
    },
    content: {
        width: "100%",
        marginTop: "5%",
        zIndex: "9999"
    },

    cont1: {
        marginBottom: 15,
        boxShadow: "",
    },

    cover: {
        width: "150px",
        height: "170px",
    },
    button: {
        width: "10px",
        height: "20px",
        marginLeft: "5px",
        marginRight: "5px",
    },
    text: {
        position: "absolute",
        marginTop: "-30%",
        marginLeft: "50%",
        display: "column",
    },

    margin: {
        position: "absolute",
        marginLeft: "70%",
    },

    title: {
        display: "flex",
        marginLeft: "15px",
        justifyContent: "center",
    },
    antPrice:{
       textDecoration: "line-through",
       color: "grey",
    },
    sum: {
        display: "flex",
    },
    box: {
        marginTop: '20px',
        justifyContent: "center",
    },
}));

export function Cart() {

    const classes = useStyles();
    let data = JSON.parse(localStorage.getItem("data"));
    let ver = localStorage.getItem("coup")
    var total = 0;
    var subTotal = 0;
   
    const [state, setState] = useState();
    const [cupon, setCupon] = useState();

    if (ver === "null" && cupon > 0){
        console.log("dentro")
        setCupon(0)
        localStorage.removeItem("coup");
    }
    
    if (JSON.stringify(state) !== JSON.stringify(data)) setState(data);
    
    const localProfile = JSON.parse(localStorage.getItem('token')) ? 
    jwt.verify(JSON.parse(localStorage.getItem('token')), 
    process.env.REACT_APP_SECRET_KEY) : null
    const userId = localProfile?.id;
  
    const { Coupons } = useSelector((state) => state.couponReducer);  

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getCoupons(userId));
      }, // eslint-disable-next-line
      []);

    function removeProduct(id) {
        let data = JSON.parse(localStorage.getItem("data"));
        data = data.filter((e) => e.id !== id);
        localStorage.removeItem("data");
        localStorage.setItem("data", JSON.stringify(data));
        setState(data);
        if(data.length < 1){
            setCupon(0)
        }
    
    }

    if(subTotal === 0){
      state?.forEach((e) => (subTotal = Number(subTotal) + Number(e.price)));
      localStorage.removeItem("total");
      localStorage.setItem("total", JSON.stringify(subTotal))
    }
    
    
    function sum(id) {
        state?.forEach((e) => {
            
            if (e.id === id && e.units < e.stock) {
                let sub = Number(e.price) / Number(e.units);
                e.units++;
                sub = Number(sub) * e.units;
                e.price = sub.toFixed(2);
            }
     
        });

        localStorage.removeItem("data");
        localStorage.setItem("data", JSON.stringify(state));
        let data = JSON.parse(localStorage.getItem("data"));
        setState(data);

        state?.forEach((e) => (subTotal= Number(subTotal) + Number(e.price)));
        subTotal = subTotal.toFixed(2) 
    }

    function res(id) {
        state?.forEach((e) => {
            if (e.id === id && e.units > 1) {
                let sub = Number(e.price) / Number(e.units);
                e.units--;
                sub = Number(sub) * e.units;
                e.price = sub.toFixed(2);
            }
            
        });
        localStorage.removeItem("data");
        localStorage.setItem("data", JSON.stringify(state));
        let data = JSON.parse(localStorage.getItem("data"));
        state?.forEach((e) => (subTotal = Number(subTotal) + Number(e.price)));
        subTotal = subTotal.toFixed(2)  
        localStorage.removeItem("total");
        localStorage.setItem("total", JSON.stringify(subTotal));
        setState(data);
    }



    function handleSelect(e){
        let id = 0;
        Coupons.forEach(cop => { 
            if (cop.discount === Number(e.target.value)) return id = cop.id} )
        localStorage.removeItem("coup");
        localStorage.setItem("coup", JSON.stringify(id))
        setCupon(e.target.value)
    }

     if(cupon){ 
       total = subTotal.toFixed(2) - subTotal.toFixed(2) * cupon
        total = Number(total).toFixed(2)
       localStorage.removeItem("total");
       localStorage.setItem("total", JSON.stringify(total))
      }      
    
    return (
        <CardContent className={classes.content}>
         {(state?.length > 0) ?( 
            <div>   
            {state?.map((e) => (
                <Box borderBottom={2}>
                    <ListItem borderBottom={1} key={e.id}>
                        <div className={classes.details}>
                            <Grid item className={classes.cont1}>
                                <IconButton
                                    aria-label="delete"
                                    className={classes.margin}
                                    onClick={() => removeProduct(e.id)}
                                >
                                    <DeleteIcon fontSize="medium" />
                                </IconButton>
                                <CardMedia
                                    className={classes.cover}
                                    image={e.image}
                                />
                                <div className={classes.text}>
                                    <Typography>{e.name}</Typography>
                                    <div className={classes.sum}>
                                        <Button
                                            className={classes.button}
                                            onClick={() => res(e.id)}
                                        >
                                            -
                                        </Button>
                                        <Grid>{e.units}</Grid>
                                        <Button
                                            className={classes.button}
                                            onClick={() => sum(e.id)}
                                        >
                                            +
                                        </Button>
                                    </div>
                                    <Typography component="h6" variant="h6">
                                        SubTotal: ${e.price}
                                    </Typography>
                                </div>
                            </Grid>
                        </div>
                    </ListItem>
                  
                </Box>))}
            <Box className={classes.box}>
                    <Typography
                        className={classes.title}
                        component="h5"
                        variant="h5"
                        align= "center"
                    >
                        Coupons: 
                    </Typography>
             <div>
            {Coupons?.length > 0 ? (
             <div className="form-group">
                <select name="coupons" className="form-control-Cart" onChange={(e) => handleSelect(e)}>
                  <option key = "999" value = "0" selected> Select coupon </option> 
                 {Coupons.map(coup =>(
                    <option key = {coup.id} value = {coup.discount}>Coupon for: {coup.discount*100} %</option>
                 ))}
                </select>
             </div>
            ) : (
                 <div style={{
                     display: "flex",
                     justifyContent: "center",
                     alignItems: "center",
                     height: "55vh"}}>             
                     <h4 id="user-coupons-empty-message">Nothing coupons...</h4>
                 </div>
            )
            }  
            </div>
         </Box>
            {total < subTotal? (
                <Box className={classes.box}>
                    {cupon > 0 ?(  
                    <div>
                    <Typography
                        className={classes.antPrice}
                        component="h6"
                        variant="h6"
                        align= "center"
                    >  Before: $ {subTotal} 
                    </Typography>
                      <Typography
                      className={classes.title}
                      component="h4"
                      variant="h4"
                      align= "center"
                  > 
                      Total: ${total}
                  </Typography>
                    </div>    
                    ):(
                        <div>
                        <Typography
                          className={classes.title}
                          component="h4"
                          variant="h4"> 
                          Total: ${subTotal}
                        </Typography>
                        </div>
                    )
                    }
                </Box>
            ) : (
                <Typography
                      className={classes.title}
                      component="h4"
                      variant="h4"
                      align= "center"
                >
                    Total: ${subTotal}
                </Typography>
            )}
            <CreateOrder/>
            </div>):(
                <div>
                <Typography
                className={classes.title}
                component="h4"
                variant="h4"
                align= "center">
                There are no items in the cart
            </Typography>
                </div>)
            }
        </CardContent>
    );
}
