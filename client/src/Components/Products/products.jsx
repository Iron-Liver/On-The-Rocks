import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getProducts } from '../../Redux/Products/productsActions'
import { makeStyles } from "@material-ui/core/styles";
import {Button, Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import Filters from './Filters';
import { addProductCart } from "../../Redux/Cart/cartActions";
import swal from "sweetalert";


const useStyles = makeStyles({
    root: {
        minWidth: 250,
        maxWidth: 345,
        height: 460,
        margin: 10,
        boxShadow: '0px 3px 1px 1px grey',
        border: '1px solid grey',
        '&:hover': {
            boxShadow: '0px 3px 1px 1.5px #707b7c',
            transition:'box-shadow 0.1s'

        }
    },
    media: {
       
        height: 250,
        width: 200,
        margin: "auto"
    },
    wrapped: {
        justifyContent: "center",
        display: "flex",
        flexWrap: "wrap",
        margin: 45,
        marginTop: "3%",
    },
    links: {
        textDecoration: 'none',
        color: 'black'
    },
    button:{
        width: "100%",
        backgroundColor: "black",
        color: "white",
        '&:hover': {
            backgroundColor: "grey",
            boxShadow: 'none',
          },
          '&:active': {
            boxShadow: 'none',
            backgroundColor: '#5dc1b9',
          },
        },
        

});


const Products = () => {

    const {FoundProds, Products} = useSelector(state => state.productReducer)
    const dispatch = useDispatch()
    const classes = useStyles();
    const {search} = window.location

    const products = search.includes('?search') 
                    ? Products?.filter(product => product.name.toLowerCase().includes(search.substring(8).toLowerCase().split('-').join(' ')))
                    : FoundProds

    useEffect(() => {
        dispatch(getProducts());
    }, 
    // eslint-disable-next-line
    []);


    function onSubmit(e,id,image,name,price) {
        let data = JSON.parse(localStorage.getItem("data"));
        let filteredData = data?.filter((e) => e.id === id);
        if (filteredData?.length > 0 && data?.length > 0) {
            swal("The product is already in the cart!");
        } else {
                addProductCart({
                    units: 1,
                    id: id,
                    price: price,
                    image: image,
                    name: name,})
                swal("The product was added to the cart!");
            }
        }
    

    return (
        <div>
            <Grid container>
                <Grid item xs={2}>
                    <Filters/>
                </Grid>
                <Grid>
                    <div className={classes.wrapped}>
                        {products?.map((spirits) => {
                            return (
                                <Grid key={spirits.id} item md={3} sm={6} xs={12}>
                                    <Card className={classes.root} >
                                        <NavLink to={`/products/${spirits.id}`} className={classes.links}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image={spirits.image}
                                                    title={spirits.name}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h6" component="h6">
                                                        {spirits.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        {spirits.brand}
                                                    </Typography>
                                                    <Typography gutterBottom variant="h6" component="h6">
                                                        ${spirits.price}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </NavLink>
                                      <Button  className={classes.button} onClick={(e) => onSubmit(e, spirits.id, spirits.image, spirits.name, spirits.price)}>ADD+</Button>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Products
