import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getProducts } from '../../Redux/Products/productsActions'
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from "@material-ui/core";
import { NavLink } from 'react-router-dom';


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

    const products1 = useSelector(state => state.productReducer.FoundProds);
    const dispatch = useDispatch()
    const classes = useStyles();

    useEffect(() => {
        dispatch(getProducts());
    }, []);


    return (
        <div>
            <Grid container>
                <Grid>
                    <div className={classes.wrapped}>
                        {products1?.map((spirits) => {
                            return (
                                <Grid item md={3} sm={6} xs={12}>
                                    <NavLink to={`/products/${spirits.id}`}>
                                        <Card className={classes.root}>
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
                                        </Card>
                                    </NavLink>
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
