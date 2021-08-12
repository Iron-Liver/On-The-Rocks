import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router';
import { makeStyles } from "@material-ui/core/styles";
import { getProductById } from "../../Redux/Products/productsActions"
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from "@material-ui/core";
import { CheckCircle, Info, RemoveShoppingCart, ShoppingCart } from '@material-ui/icons';
import Rating from '@material-ui/lab/Rating';
import { green } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-flex',
        height: '75vh',
        width: '100%',
        justifyContent: "space-evenly"
    },

    stock: {
        display: "flex",
        alignItems: "center",
        marginBottom: 10
    },
    details: {
        textAlign: 'start',
        width: '60%',
    },
    content: {
        width: '100%',
        marginTop: '5%',
    },

    cont1: {
        marginBottom: 15,
    },

    cover: {
        width: '55%',
        height: '300px',
    },
    divimage: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '25%',
    },

    button: {
        marginBottom: 15,
        width: 200,
        height: 55,
    },
    review: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "flex-start",
        paddingBottom: theme.spacing(1),
    },

}));

const ProductDetail = () => {

    const [value, setValue] = useState(2);
    const dispatch = useDispatch();
    const spirits = useSelector((state) => state.productReducer.FoundProds)
    const { id: liqueur } = useParams();
    const classes = useStyles();
    const [quant, setQuant] = useState(1);


    const handleChangeQuant = (type) => {
        if (type === '+') {
            setQuant(quant === spirits[0].stock ? spirits[0].stock : quant + 1)
        } else {
            setQuant(quant === 1 ? 1 : quant - 1)
        }
    }

    useEffect(() => {
        dispatch(getProductById(liqueur))
    }, [dispatch, liqueur])


    if (!spirits) {
        return (<h1>Please wait</h1>)
    }
    let stockText = <div>
        <CheckCircle style={{ color: green[500] }} />
        <span>On Stock</span>
    </div>

    let btncart = <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<ShoppingCart className={classes.cartIcon} />}
    >
        <h3>ADD TO CART</h3>
    </Button>

    if (spirits[0].stock <= 5) {
        stockText = <div>
            <Info style={{ color: red[500] }} />
            <span>Low Stock</span>
        </div>
    }
    if (spirits[0].stock <= 0) {
        stockText = <div>
            <Info color="disabled" />
            <span>No Stock</span>
        </div>;
        btncart = <Button
            disabled
            variant="contained"
            color="disabled"
            className={classes.button}
            startIcon={<RemoveShoppingCart className={classes.cartIcon} />}
        >
            <h3>ADD TO CART</h3>
        </Button>
    }


    return (
        <Card className={classes.root}>
            <div className={classes.divimage}>
                <CardMedia
                    className={classes.cover}
                    image={spirits[0].image}
                />
            </div>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Grid item className={classes.cont1}>
                        <Typography variant="h4">
                            {spirits[0].name}
                        </Typography>
                        <Typography component="h5" variant="h5">
                            ${spirits[0].price}
                        </Typography>
                        <Typography component="h5" variant="h5">
                            {spirits[0].brand}
                        </Typography>
                    </Grid>
                    <Typography variant="h6" color="textSecondary">
                        {spirits[0].description}
                    </Typography>
                </CardContent>
                <div className={classes.controls}>
                    <div>
                        <button onClick={() => handleChangeQuant('-')} >-</button>
                        <span>{quant}</span>
                        <button onClick={() => handleChangeQuant('+')} >+</button>
                        {btncart}
                    </div>
                    <div className={classes.stock}>
                        {stockText}
                    </div>
                    <p>
                    {spirits[0].stock}
                    </p>
                </div>
                <div className={classes.review}>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend">Review</Typography>
                        <Rating
                            name="review product"
                            value={value}
                            size="large"
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </Box>
                </div>
            </div>
        </Card>
    )
}

export default ProductDetail
