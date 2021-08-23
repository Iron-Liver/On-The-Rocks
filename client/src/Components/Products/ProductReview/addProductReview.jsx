import React, { useEffect, useState } from "react";
import {
    makeStyles,
    TextField,
    Grid,
    Paper,
    Typography,
    Button,
} from "@material-ui/core";
import axios from "axios";
import Rating from "@material-ui/lab/Rating";
import jwt from "jsonwebtoken"

import { useDispatch } from "react-redux";
import {createReview} from '../../../Redux/Reviews/reviewActions'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        width: "90%",
        margin: "auto",
        display: "flex",
    },
}));

export const AddProductReview = ({ prodId, userId }) =>{
    const classes = useStyles(); 
    const [stars, setStars] = useState();
    const [input, setInput] = useState();
    const [order, setOrder] = useState();
    const [coment, setComent] = useState(false);
    const dispatch = useDispatch()

     const currentUser = JSON.parse(localStorage.getItem('token')) ? 
     jwt.verify(JSON.parse(localStorage.getItem('token')), 
     process.env.REACT_APP_SECRET_KEY) : null 

    const handleInputChange = async (e) => {
        await setInput(e.target.value);
    };
 
    if (!order){
        (async function (){
          const result = await axios.get(`/order/getOrderById/${userId}`)
          setOrder(result.data);
        })()
    }
    else{
        let date = order.order_products
        console.log(date)
    
         date.map((e) => {
           
            console.log("comparo", e.productId.toString(), prodId) 
            if(e.productId.toString() === prodId){
             console.log("comparo2", e.productId.toString(), prodId)   
             return setComent(true);
            }
        }) 
    }

    return (
        <Paper className={classes.paper}>
            <Grid
                container
                spacing={2}
                direction="column"
            >
                <div>
                { (currentUser) && (coment) ?
                 <div>
                 <Grid item>
                    <Typography variant="h5">
                        Please give your opinion.
                    </Typography>  
                    <Rating
                        
                        name={`user review`}
                        value={stars ? stars : 0}
                        size="large"
                        onChange={(event, newValue) => {
                            setStars(newValue ? newValue : 1);
                        }}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        helperText={
                            "Enter your opinion. \n Minimum length 28 characters. \n Maximum length 528 characteres."
                        }
                        fullWidth={true}
                        id="description"
                        label="Description"
                        name="description"
                        multiline
                        rows={4}
                        value={input}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item container alignContent='flex-end'>
                    <Button onClick={() => {dispatch(createReview(userId,prodId,stars,input))}}>Submit</Button>
                </Grid>
                </div>
                :
            
                <Grid item>
                   <h3>
                   Please login to leave your opinion.
                   </h3>  
               </Grid>
           
                }
            </div>
            </Grid>
        </Paper>
    );
};
export default AddProductReview;
