import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getProducts } from '../../Redux/Products/productsActions'
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid, Button } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import { Delete } from '@material-ui/icons';
import Filters from './Filters';


const useStyles = makeStyles({
    root: {
        minWidth: 250,
        maxWidth: 345,
        height: 460,
        margin: 10
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
        margin: 50,
        marginTop: "3%",
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
                                        <Button>
                                            <Delete/>
                                        </Button>
                                        <NavLink to={`/products/${spirits.id}`}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image={spirits.image}
                                                    title={spirits.name}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {spirits.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        {spirits.brand}
                                                    </Typography>
                                                    <Typography gutterBottom variant="h6" component="h6">
                                                        {spirits.price}
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
