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
import { CheckCircle, Info, RemoveShoppingCart, ShoppingCart } from '@material-ui/icons';
import Rating from "@material-ui/lab/Rating";
import { addProductCart } from "../../Redux/Cart/cartActions";
import swal from "sweetalert";
import { getProductReviews } from "../../Redux/Reviews/reviewActions";
import jwt from "jsonwebtoken";
import ProductReviewCard from "./ProductReview/productReviewCard";
import AddProductReview from "./ProductReview/addProductReview";
import { green, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        width: "100%",
        marginBottom: theme.spacing(4),
        boxShadow: "none"
    },
    details: {
        textAlign: "start",
        width: "70%",
    },
    content: {
        width: "80%",
        marginTop: "5%",
    },

    cont1: {
        marginBottom: 15,
        fontFamily: `'Heebo', sans-serif`,
        fontWeight: "700"
    },

    divimage: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      margin: "30px 0"
    },
    cover: {
      width: "50%",
      objectFit: "scale-down"
    },

    button: {
        margin: theme.spacing(1),
        width: 200,
        height: 55,
        backgroundColor: "#493d30",
        color: "white",
            '&:hover': {
                backgroundColor: "#30281f",
                boxShadow: 'none',
              },
              '&:active': {
                boxShadow: 'none',
                backgroundColor: '#1d1813',
              },
            
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
        display: "flex"
    },
    sum1: {
        display: "flex"
    },
    review: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // paddingLeft: theme.spacing(2),
        // paddingBottom: theme.spacing(1),
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
    stockText: {
      display: "flex",
      alignItems: "center",
      marginTop: "8px"
    },
    stockStatus: {
      fontFamily: `"Montserrat", sans-serif`,
      fontSize: "17px",
      marginTop: "6px"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    //eslint-disable-next-line
    ['@media (max-width: 800px)']: {
      root: {
        flexDirection: "column"
      },
      details: {
        width: "100%"
      },
      content: {
        width: "100%",
        marginTop: "5%",
      } 
    },
    button2: {
        padding: 0,
        width: "10px",
        height: "20px",
        marginLeft: "5px",
        marginRight: "5px",
        marginBottom: "30px",
    },
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
            window.scrollTo(0,0)
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
                console.log(liqueur)
                swal("The product was added to the cart!");
            } else {
                swal("Please enter a valid unit");
            }
        }
    }

    let stockText = <div className={classes.stockText}>
        <CheckCircle style={{ color: green[500] }} />
        <span className={classes.stockStatus}>On Stock</span>
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

    if (liqueur.stock <= 5) {
        stockText = <div className={classes.stockText}>
            <Info style={{ color: red[500] }} />
            <span className={classes.stockStatus}>Low Stock</span>
        </div>
    }
    if (liqueur.stock <= 0) {
        stockText = <div className={classes.stockText}>
            <Info color="disabled" />
            <span className={classes.stockStatus}>No Stock</span>
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
        <>
            {liqueur ? (
                <>
                    <Card className={classes.root}>
                        <div className={classes.divimage}>
                            <img
                                className={classes.cover}
                                src={liqueur.image}
                                alt={liqueur.name}
                                draggable={false}
                            />
                        </div>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Grid item className={classes.cont1}>
                                    <Typography variant="h4" style={{
                                      fontFamily: "'Heebo', sans-serif",
                                      letterSpacing: "-0.5px"
                                    }}>
                                        {liqueur.name}
                                    </Typography>
                                    <div className={classes.review} style={{
                                      fontFamily: "'Montserrat', sans-serif",
                                      letterSpacing: "-0.5px"
                                    }}>
                                        <Box
                                            component="fieldset"
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
                                    <Typography component="h5" variant="h5" style={{
                                      fontFamily: "'Montserrat', sans-serif",
                                      letterSpacing: "-0.5px"
                                    }}>
                                        ${liqueur.price}
                                    </Typography>
                                    <Typography component="h5" variant="h5" style={{
                                      fontFamily: "'Montserrat', sans-serif",
                                      letterSpacing: "-0.5px"
                                    }}>
                                        Brand: {liqueur.brand}
                                    </Typography>
                                    {stockText}
                                </Grid>
                                <Typography variant="h6" style={{
                                      fontFamily: "'Montserrat', sans-serif",
                                      fontSize: "18px",
                                      letterSpacing: "-0.5px",
                                      fontWeight: "300",
                                    }}>
                                    {liqueur.description}
                                </Typography>
                                <div className={classes.controls}>
                                    <div style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      alignItems: "center",
                                      width: "max-content"
                                    }}>
                                      <h3 className={classes.sum1}>Quantity</h3>
                                      <div className={classes.sum2}>
                                          <Button
                                              variant="contained"
                                              size="small"
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
                                    {btncart}
                                </div>
                            </CardContent>
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
