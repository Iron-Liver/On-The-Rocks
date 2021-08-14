import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router';
import { makeStyles } from "@material-ui/core/styles";
import { getProductById } from "../../Redux/Products/productsActions"
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box, Select, FormControl,MenuItem, InputLabel} from "@material-ui/core";
import { ShoppingCart } from '@material-ui/icons';
import Rating from '@material-ui/lab/Rating';
import { addProductCart } from '../../Redux/Cart/cartActions';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'inline-flex',
        height: '75vh',
        width:'100%',
        justifyContent: "space-evenly"

    },
    details: {
        textAlign:'start',
        width:'60%',
        
    },
    content: {
        width: '100%',
        marginTop:'5%',
        
    },

    cont1: {
        marginBottom: 15,
    },

    cover: {
        width: '55%',
        height: '300px',
    
        
    },
    divimage: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'25%',
    },

    button: {
        margin: theme.spacing(1),
        width: 200,
        height:55,
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

    function onSubmit(e){

     addProductCart({
        units: quant,
        id: spirits[0].id,
        price: spirits[0].price * quant,
        image: spirits[0].image,
        name: spirits[0].name})
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
                        <Typography  variant="h4">
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
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={<ShoppingCart className={classes.cartIcon} />}
                        onClick= {(e) => onSubmit(e)} 
                    >
                        <h3>ADD TO CART</h3>
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
