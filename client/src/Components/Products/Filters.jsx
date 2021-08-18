import { useEffect, React } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { filterByCategory, filterByPrice } from '../../Redux/Products/productsActions'
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { getAllCategories } from '../../Redux/Category/categoryActions';


const useStyles = makeStyles({

    button: {
        marginRight: 7
    },

    root: {
        display: "flex",
        backgroundColor: '#333232',
    },

    form: {
        display: "flex",
        height: "100px",
    }

})

const Filters = () => {

    const { categories } = useSelector(state => state.categoryReducer)
    const { Products } = useSelector(state => state.productReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch])


    function handleSelect(e) {
        dispatch(filterByCategory(e.target.value))
        console.log(e.target.value)
        console.log(Products)
    }

    function orderByPrice(type) {
        dispatch(filterByPrice(type))
    }

    const classes = useStyles();

    //------------------------------------    

    return (

        <Grid container className={classes.root}>
            <Grid item>
            </Grid>
            <Grid item >
                <div>
                    <h4 style={{ color: "white" }}>Order by categories</h4>
                    <select onChange={handleSelect}>
                        {
                            categories && categories.map(category =>
                                <option value={category.id} key={category.name}>{category.name}</option>
                            )
                        }
                    </select>
                </div>
                <h4 style={{ color: "white" }}>Order by Price</h4>
                <Button size="small" className={classes.button} variant="contained" color="primary" onClick={() => orderByPrice("MAX")}>
                    HIGHER
                </Button>
                <Button size="small" variant="contained" color="primary" onClick={() => orderByPrice("MIN")}>
                    LOWER
                </Button>
            </Grid>
        </Grid>
    )
}

export default Filters

                // <FormControl component="fieldset">
                //     <h4>Order By Category</h4>
                //     <RadioGroup className={classes.form} aria-label="gender" name="category" onChange={handleSelect}>
                //         <FormControlLabel value="Vodka" control={<Radio />} label="Vodka" />
                //         <FormControlLabel value="Tequila" control={<Radio />} label="Tequila" />
                //         <FormControlLabel value="Whisky" control={<Radio />} label="Whisky" />
                //         <FormControlLabel value="Gin" control={<Radio />} label="Gin" />
                //         <FormControlLabel value="Liqueur" control={<Radio />} label="Liqueur" />
                //         <FormControlLabel value="Brandy" control={<Radio />} label="Brandy" />
                //     </RadioGroup>
                // </FormControl>