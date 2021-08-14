import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { getProductById } from "../../Redux/Products/productsActions";
import { getProductReviews } from "../../Redux/Reviews/reviewActions";
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
import ProductReviewCard from "./ProductReview/productReviewCard";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "inline-flex",
        // height: '75vh',
        width: "100%",
        justifyContent: "space-evenly",
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
    formControl: {
        margin: theme.spacing(1),
        width: 110,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const ProductDetail = () => {
    const [value, setValue] = React.useState(2);
    const dispatch = useDispatch();
    const spirits = useSelector((state) => state.productReducer.FoundProds);
    const reviews = useSelector((state) => state.reviewReducer.productReviews);
    const { id: liqueur } = useParams();
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
        (async function(){
            console.log(liqueur);
            await dispatch(getProductById(liqueur));
            await dispatch(getProductReviews(liqueur));
            console.log(spirits, reviews)
        })();
    }, 
    // eslint-disable-next-line
    []);

    // useEffect(() => {
    //     console.log("state", spirits);
    // }, [spirits]);

    return (
        <>
            {spirits?.lenght === 1 ? (
                <>
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
                                                        ? calculateStars(reviews)
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
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    startIcon={
                                        <ShoppingCart
                                            className={classes.cartIcon}
                                        />
                                    }
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
                    <Card>
                        <ProductReviewCard reviews={reviews} />
                    </Card>
                </>
            ) : (
                <Typography variant> Loading </Typography>
            )}
        </>
    );
};

export default ProductDetail;
