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
    Select,
    FormControl,
    MenuItem,
    InputLabel,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import { addProductCart } from "../../Redux/Cart/cartActions";
import swal from "sweetalert";
import { getProductReviews } from "../../Redux/Reviews/reviewActions";
import jwt from "jsonwebtoken";
import ProductReviewCard from "./ProductReview/productReviewCard";
import AddProductReview from "./ProductReview/addProductReview";

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
    const [quant, setQuant] = React.useState("");

    const handleChange = (event) => {
        setQuant(event.target.value);
    };

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
                });
                swal("The product was added to the cart!");
            } else {
                swal("Please enter a valid unit");
            }
        }
    }

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
                                    <Typography component="h5" variant="h5">
                                        ${liqueur.price}
                                    </Typography>
                                    <Typography component="h5" variant="h5">
                                        {liqueur.brand}
                                    </Typography>
                                </Grid>
                                <Typography variant="h6" color="textSecondary">
                                    {liqueur.description}
                                </Typography>
                            </CardContent>
                            <div className={classes.controls}>
                                <Button
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
                                <FormControl
                                    variant="outlined"
                                    className={classes.formControl}
                                >
                                    <InputLabel id="Quantity">
                                        Quantity
                                    </InputLabel>
                                    <Select
                                        labelId="Quantity"
                                        id="Quantity"
                                        value={quant}
                                        onChange={handleChange}
                                        label="Quantity"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                    </Select>
                                </FormControl>
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