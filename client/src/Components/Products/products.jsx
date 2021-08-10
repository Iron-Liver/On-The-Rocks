import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getProducts } from '../../Redux/Products/productsActions'
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import Filters from './Filters';


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
    }
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
