import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router';
import { makeStyles } from "@material-ui/core/styles";
import { getProductById } from "../../Redux/Products/productsActions"
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box, Select, FormControl,MenuItem, InputLabel} from "@material-ui/core";
import { ShoppingCart } from '@material-ui/icons';
import Rating from '@material-ui/lab/Rating';

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
    review: {
        display: 'flex',
        alignItems: 'center',
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
    const spirits = useSelector((state) => state.productReducer.FoundProds)
    const { id: liqueur } = useParams();
    const classes = useStyles();
    const [quant, setQuant] = React.useState('');

    const handleChange = (event) => {
        setQuant(event.target.value);
    };

    useEffect(() => {
        dispatch(getProductById(liqueur))
    }, [dispatch, liqueur])
    // eslint-disable-next-line

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
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="Quantity">Quantity</InputLabel>
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
