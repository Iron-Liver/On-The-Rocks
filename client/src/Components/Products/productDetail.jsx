import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    CardContent,
    Typography,
    Button,
    Grid,
    Box,
    CircularProgress,
    IconButton,
} from "@material-ui/core";

import {
    CheckCircle,
    Info,
    RemoveShoppingCart,
    ShoppingCart,
    Add,
    Remove,
} from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import { addProductCart } from "../../Redux/Cart/cartActions";
import swal from "sweetalert";
import { getProductReviews } from "../../Redux/Reviews/reviewActions";
import verifyUser from "../../Utils/verifyUser";
import ProductReviewCard from "./ProductReview/productReviewCard";
import AddProductReview from "./ProductReview/addProductReview";
import { addProductWishlist } from "../../Redux/Wishlist/wishlistActions";
import { green, red } from "@material-ui/core/colors";
import { getProducts } from "../../Redux/Products/productsActions";
import CustomButton from "../Button/CustomButton";
import { logOutUser } from "../../Redux/Users/userActions";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        width: "100%",
        marginBottom: theme.spacing(4),
        boxShadow: "none",
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
        fontWeight: "700",
    },

    divimage: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        margin: "30px 0",
    },
    cover: {
        width: "50%",
        objectFit: "scale-down",
    },

    button: {
        margin: theme.spacing(1),
        width: 200,
        height: 55,
        backgroundColor: "#372c2e",
        color: "white",
        "&:hover": {
            backgroundColor: "grey",
            boxShadow: "none",
        },
        "&:active": {
            boxShadow: "none",
            backgroundColor: "#5dc1b9",
        },
    },
    sum2: {
        display: "flex",
        alignItems: "center",
        width: "95px",
        justifyContent: "space-between",
    },
    sum1: {
        margin: "0 0 5px 0",
        textAlign: "center",
        fontFamily: `"Montserrat", sans-serif`,
        fontWeight: 400,
    },
    buttonWish: {
        backgroundColor: "white",
        width: "max-content",
        height: "max-content",
        marginTop: 4,
        padding: 3,
    },
    cartIcon: {
        paddingTop: "3px",
    },
    wishIcon: {
        color: "#372c2e",
        fontSize: "25px",
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
        marginTop: "8px",
    },
    stockStatus: {
        fontFamily: `"Montserrat", sans-serif`,
        fontSize: "17px",
        marginTop: "6px",
    },
    controls: {
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        marginTop: "40px",
        alignItems: "center",
        minWidth: "284px",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    //eslint-disable-next-line
    ["@media (max-width: 800px)"]: {
        root: {
            flexDirection: "column",
        },
        details: {
            width: "100%",
        },
        content: {
            width: "100%",
            marginTop: "5%",
        },
        controls: {
            width: "50%",
            minWidth: "284px",
        },
    },
    button2: {
        padding: 0,
        width: "10px",
        height: "20px",
        marginLeft: "5px",
        marginRight: "5px",
        marginBottom: "30px",
    },
    price: {
        textDecoration: "line-through 2px",
        color: "red",
    },
}));

const ProductDetail = () => {
    const dispatch = useDispatch();
    const currentUser = verifyUser();
    if (currentUser?.hasOwnProperty("logout")) {
        dispatch(logOutUser());
        window.location.replace(`${window.location.origin}/login`);
        alert("please login");
    }
    const [heartIcon, setHeartIcon] = React.useState(false)
    // eslint-disable-next-line
    const [value, setValue] = React.useState(2);
    const { id } = useParams();
    const { Products } = useSelector((state) => state.productReducer);
    const liqueur = Products?.filter((p) => p.id === Number(id))[0];
    const reviews = useSelector((state) => state.reviewReducer.productReviews);
    const classes = useStyles();
    const [quant, setQuant] = React.useState(1);

    // const handleChange = (event) => {
    //     setQuant(event.target.value);
    // };
    
    const handleChangeQuant = (type) => {
        if (type === "+") {
            setQuant(quant === liqueur.stock ? liqueur.stock : quant + 1);
        } else {
            setQuant(quant === 1 ? 1 : quant - 1);
        }
    };

    const calculateStars = (r) => {
        let suma = 0;
        r.forEach((review) => (suma += review.stars));
        return suma / r.length;
    };

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    useEffect(() => {
        (async function () {
            window.scrollTo(0, 0);
            await dispatch(getProductReviews(id));
        })();
    }, [Products, dispatch, id]);

    useEffect(() => {}, [Products, reviews]);

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

    function onSubmitWishlist() {
        dispatch(
            addProductWishlist({
                userId: currentUser?.id,
                productId: liqueur?.id,
            })
        );
        setHeartIcon( heartIcon ? false : true);
    }

    let stockText = (
        <div className={classes.stockText}>
            <CheckCircle style={{ color: green[500] }} />
            <span className={classes.stockStatus}>On Stock</span>
        </div>
    );

    let btncart = (
        <CustomButton
            onClick={(e) => onSubmit(e)}
            height="max-content"
            style={{
                borderRadius: "3%",
            }}
        >
            <ShoppingCart className={classes.cartIcon} />
            <h3
                style={{
                    display: "inline",
                    margin: "10px",
                    verticalAlign: "bottom",
                }}
            >
                ADD TO CART
            </h3>
        </CustomButton>
    );

    if (liqueur && liqueur.stock <= 5) {
        stockText = (
            <div className={classes.stockText}>
                <Info style={{ color: red[500] }} />
                <span className={classes.stockStatus}>Low Stock</span>
            </div>
        );
    }
    if (liqueur && liqueur.stock <= 0) {
        stockText = (
            <div className={classes.stockText}>
                <Info color="disabled" />
                <span className={classes.stockStatus}>No Stock</span>
            </div>
        );
        btncart = (
            <Button
                disabled
                variant="contained"
                color="disabled"
                className={classes.button}
                startIcon={<RemoveShoppingCart className={classes.cartIcon} />}
            >
                <h3>ADD TO CART</h3>
            </Button>
        );
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
                                    <div
                                        style={{
                                            display: "flex",
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                            style={{
                                                fontFamily:
                                                    "'Heebo', sans-serif",
                                                letterSpacing: "-0.5px",
                                                flexGrow: 1,
                                            }}
                                        >
                                            {liqueur.name}
                                        </Typography>
                                        {currentUser && (
                                            <IconButton
                                                variant="contained"
                                                elevation={0}
                                                color="primary"
                                                className={classes.buttonWish}
                                                onClick={() =>
                                                    onSubmitWishlist(
                                                        currentUser?.id,
                                                        liqueur?.id
                                                    )
                                                }
                                            >
                                                {
                                                    heartIcon ?  (
                                                        <i class="fas fa-heart"></i>
                                                    ) : (

                                                        <i class="far fa-heart"></i>
                                                    )

                                                }
                                                
                                            </IconButton>
                                        )}
                                    </div>
                                    <div
                                        className={classes.review}
                                        style={{
                                            fontFamily:
                                                "'Montserrat', sans-serif",
                                            letterSpacing: "-0.5px",
                                        }}
                                    >
                                        <Box
                                            component="fieldset"
                                            borderColor="transparent"
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                width: "160px",
                                                justifyContent: "space-between",
                                            }}
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
                                    {liqueur.onSale ? (
                                        <>
                                            <h2
                                                style={{
                                                    fontFamily:
                                                        "'Montserrat', sans-serif",
                                                    letterSpacing: "-0.5px",
                                                    color: "#900020",
                                                    margin: "4px 0",
                                                }}
                                            >
                                                Hot sale ${liqueur.onSale}{" "}
                                                <del
                                                    style={{
                                                        color: "black",
                                                        fontSize: "15px",
                                                        fontFamily: `"Montserrat", sans-serif`,
                                                        fontWeight: 300,
                                                    }}
                                                >
                                                    {" "}
                                                    ${liqueur.price}
                                                </del>
                                            </h2>
                                        </>
                                    ) : (
                                        <>
                                            <Typography
                                                component="h5"
                                                variant="h5"
                                                style={{
                                                    fontFamily:
                                                        "'Montserrat', sans-serif",
                                                    letterSpacing: "-0.5px",
                                                }}
                                            >
                                                ${liqueur.price}
                                            </Typography>
                                        </>
                                    )}
                                    <Typography
                                        component="h5"
                                        variant="h5"
                                        style={{
                                            fontFamily:
                                                "'Montserrat', sans-serif",
                                            letterSpacing: "-0.5px",
                                        }}
                                    >
                                        Brand: {liqueur.brand}
                                    </Typography>
                                    {stockText}
                                </Grid>
                                <Typography
                                    variant="h6"
                                    style={{
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontSize: "18px",
                                        letterSpacing: "-0.5px",
                                        fontWeight: "300",
                                    }}
                                >
                                    {liqueur.description}
                                </Typography>
                                <div className={classes.controls}>
                                    {btncart}
                                    <div>
                                        <h3 className={classes.sum1}>
                                            Quantity
                                        </h3>
                                        <div className={classes.sum2}>
                                            <IconButton
                                                onClick={() =>
                                                    handleChangeQuant("-")
                                                }
                                            >
                                                <Remove />
                                            </IconButton>
                                            <Grid
                                                style={{
                                                    fontFamily: `"Montserrat", san-serif`,
                                                }}
                                            >
                                                {quant}
                                            </Grid>
                                            <IconButton
                                                onClick={() =>
                                                    handleChangeQuant("+")
                                                }
                                            >
                                                <Add />
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </div>
                    </Card>

                    {currentUser && (
                        <AddProductReview
                            prodId={id}
                            userId={currentUser?.id}
                        />
                    )}
                    <ProductReviewCard reviews={reviews} prodId={id} />
                </>
            ) : (
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        height: "85vh",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <CircularProgress style={{ color: "#372c2e" }} />
                </div>
            )}
        </>
    );
};

export default ProductDetail;
