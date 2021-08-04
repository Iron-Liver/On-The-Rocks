import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getProducts } from '../../Redux/Products/productsActions'
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Grid, Hidden, } from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 350,
        width: 200
    },
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
                <Grid item xs={6}>
                    <div>
                        {products1?.map((spirits) => {
                            return (
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
                            )
                        })}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Products
