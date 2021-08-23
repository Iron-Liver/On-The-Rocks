import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Grid,
    Box,    
} from "@material-ui/core";

import { CheckCircle, Info, RemoveShoppingCart, ShoppingCart, FavoriteBorder } from '@material-ui/icons';
import Rating from "@material-ui/lab/Rating";
import { addProductCart } from "../../Redux/Cart/cartActions";
import swal from "sweetalert";
import { getProductReviews } from "../../Redux/Reviews/reviewActions";
import jwt from "jsonwebtoken";
import ProductReviewCard from "./ProductReview/productReviewCard";
import AddProductReview from "./ProductReview/addProductReview";
import { addProductWishlist } from "../../Redux/Wishlist/wishlistActions";
import { green, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "inline-flex",
        // height: '75vh',
        width: "100%",
        justifyContent: "space-evenly",
        marginBottom: theme.spacing(4),
    },
    details: {
        textAlign: "start",
        width: "60%",
    },
    content: {
        width: "100%",
        marginTop: "5%",
    },

    cont1: {
        marginBottom: 15,
    },

    cover: {
        width: "55%",
        height: "300px",
    },
    divimage: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "25%",
    },

    button: {
        margin: theme.spacing(1),
        width: 200,
        height: 55,
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
    sum2: {
        display: "flex",
        marginLeft: "5px",
    },
    sum1: {
        display: "flex",
        marginLeft: "45px",
    },
    buttonWish: {
        backgroundColor: "white",
        margin: theme.spacing(1),
        width: 60,
        height: 55,
    },
    wishIcon: {
        color: "red",
        marginLeft: "10px",
        width: 50,
        height: 50,
    },
    review: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: theme.spacing(2),
        paddingBottom: theme.spacing(1),
    },
    noStars: {
        "& .MuiGrid-container": {
            display: "flex",
            justifyContent: "center",
        },
    },
    formControl: {
        margin: theme.spacing(1),
        width: 110,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    button2: {
        width: "10px",
        height: "20px",
        marginLeft: "5px",
        marginRight: "5px",
        marginBottom: "30px",

    },
    price:{
        textDecoration:"line-through 2px",
        color: "red"
    }
}));

const ProductDetail = () => {
    // eslint-disable-next-line
    const [value, setValue] = React.useState(2);
    const currentUser = JSON.parse(localStorage.getItem("token"))
        ? jwt.verify(
            JSON.parse(localStorage.getItem("token")),
            process.env.REACT_APP_SECRET_KEY
        )
        : null;
    const { id } = useParams();
    const dispatch = useDispatch();
    const { Products } = useSelector((state) => state.productReducer);
    const liqueur = Products?.filter((p) => p.id === Number(id))[0];
    const reviews = useSelector((state) => state.reviewReducer.productReviews);
    const classes = useStyles();
    const [quant, setQuant] = React.useState(1);

    // const handleChange = (event) => {
    //     setQuant(event.target.value);
    // };

    const handleChangeQuant = (type) => {
        if (type === '+') {
            setQuant(quant === liqueur.stock ? liqueur.stock : quant + 1)
        } else {
            setQuant(quant === 1 ? 1 : quant - 1)
        }
    }

    const calculateStars = (r) => {
        let suma = 0;
        r.forEach((review) => (suma += review.stars));
        return suma / r.length;
    };

    useEffect(() => {
        (async function () {
            await dispatch(getProductReviews(id));
        })();
    }, [Products, dispatch, id]);

    useEffect(() => { }, [Products, reviews]);

    function onSubmit(e) {
        let data = JSON.parse(localStorage.getItem("data"));
        let filteredData = data?.filter((e) => e.id === liqueur.id);
        if (filteredData?.length > 0 && data?.length > 0) {
            swal("The product is already in the cart!");
        } else {
            if (quant > 0) {
                addProductCart({
                    units: quant,
                    id: liqueur.id,
                    price: liqueur.price * quant,
                    image: liqueur.image,
                    name: liqueur.name,
                    stock: liqueur.stock,
                });
                swal("The product was added to the cart!");
            } else {
                swal("Please enter a valid unit");
            }
        }
    }

    function onSubmitWishlist (){
        dispatch(addProductWishlist({
            userId: currentUser?.id,
            productId: liqueur?.id
        }))
    }

    //----------------------------------------------------------------------//
    let stockText = <div>
        <CheckCircle style={{ color: green[500] }} />
        <span>On Stock</span>
    </div>

    let btncart = <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={
            <ShoppingCart
                className={classes.cartIcon}
            />
        }
        onClick={(e) => onSubmit(e)}
    >
        <h3>ADD TO CART</h3>
    </Button>

    if (liqueur?.stock <= 5) {
        stockText = <div>
            <Info style={{ color: red[500] }} />
            <span>Low Stock</span>
        </div>
    }
    if (liqueur?.stock <= 0) {
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
    //----------------------------------------------------------------------------//
    return (
        <>
            {liqueur ? (
                <>
                    <Card className={classes.root}>
                        <div className={classes.divimage}>
                            <CardMedia
                                className={classes.cover}
                                image={liqueur.image}
                            />
                        </div>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Grid item className={classes.cont1}>
                                    <Typography variant="h4">
                                        {liqueur.name}
                                    </Typography>
                                    <div className={classes.review}>
                                        <Box
                                            component="fieldset"
                                            mb={3}
                                            borderColor="transparent"
                                        >
                                            <Rating
                                                readOnly
                                                name="review product"
                                                value={
                                                    reviews.length > 0
                                                        ? calculateStars(
                                                            reviews
                                                        )
                                                        : 0
                                                }
                                                precision={0.5}
                                                size="small"
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                        </Box>
                                    </div>
                                    {liqueur.onSale? 
                                    <Typography component="h5" variant="h5">
                                     <h3>SALE ${liqueur.onSale}</h3>
                                     <h5 className={classes.price} >PRICE ${liqueur.price}</h5>
                                    </Typography>
                                    :                                 
                                    <Typography component="h5" variant="h5">
                                        ${liqueur.price} 
                                    </Typography>}
                                    <Typography component="h5" variant="h5">
                                        {liqueur.brand}
                                    </Typography>
                                    <div>
                                        {stockText}
                                    </div>
                                </Grid>
                                <Typography variant="h6" color="textSecondary">
                                    {liqueur.description}
                                </Typography>
                            </CardContent>
                            <div className={classes.controls}>
                                {currentUser && (<Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.buttonWish}
                                    startIcon={
                                        <FavoriteBorder
                                            className={classes.wishIcon}
                                        />
                                    }
                                    onClick={onSubmitWishlist(currentUser?.id, liqueur?.id)}
                                > 
                                </Button>)}
                                {btncart}
                                <h3 className={classes.sum1}>QUANTITY</h3>
                                <div className={classes.sum2}>
                                    <Button
                                        variant="contained"
                                        className={classes.button2}
                                        onClick={() => handleChangeQuant('-')}
                                    >
                                        -
                                    </Button>
                                    <Grid>{quant}</Grid>
                                    <Button
                                        variant="contained"
                                        className={classes.button2}
                                        onClick={() => handleChangeQuant('+')}
                                    >
                                        +
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {currentUser && (<AddProductReview prodId={id} userId={currentUser?.id} />)}
                    <ProductReviewCard reviews={reviews} prodId={id} />
                </>
            ) : (
                <Typography variant="h1" align="center">
                    {" "}
                    Loading{" "}
                </Typography>
            )}
        </>
    );
};

export default ProductDetail;
