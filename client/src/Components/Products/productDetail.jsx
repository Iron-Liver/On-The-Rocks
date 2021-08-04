import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { getProductById } from "../../Redux/Products/productsActions"
import { Card, CardContent, CardMedia, Typography, IconButton, Button, Grid } from "@material-ui/core";
import { ShoppingCart } from '@material-ui/icons';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: 800,
        justifyContent: "center"

    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        width: 650,
    },

    cont1: {
        marginBottom: 30,        
    },

    cover: {
        width: 600,
        height: 700,
        marginTop: 50
    },

    controls: {

        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),

    },
    cartIcon: {
        height: 38,
        width: 38,
    },
    button: {
        margin: theme.spacing(1),
        width: 500,
        height: 70,
    },
}));


const ProductDetail = () => {

    const dispatch = useDispatch();
    const spirits = useSelector((state) => state.productReducer.FoundProds)
    // const id = props.match.params.id;
    const { id: liqueur } = useParams();
    const classes = useStyles();
    const theme = useTheme();

    useEffect(() => {
        dispatch(getProductById(liqueur))
    }, [])

    if (!spirits) {
        return (<h1>Please wait</h1>)
    }

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={spirits[0].image}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Grid item className={classes.cont1}>
                        <Typography component="h1" variant="h3">
                            {spirits[0].name}
                        </Typography>
                        <Typography component="h4" variant="h4">
                            {spirits[0].price}
                        </Typography>
                        <Typography component="h4" variant="h4">
                            {spirits[0].brand}
                        </Typography>                        
                    </Grid>
                    <Typography variant="h4" color="textSecondary">
                        {spirits[0].description}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<ShoppingCart className={classes.cartIcon} />}
                    >
                        <h2>ADD TO CART</h2>
                    </Button>
                    <Typography component="h5" variant="h5">
                        QUANTITY
                    </Typography>
                </div>
            </div>
        </Card>
    )
}

export default ProductDetail
