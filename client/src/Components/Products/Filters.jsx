import React from 'react'
import { useDispatch } from "react-redux"
import { filterByCategory, filterByPrice } from '../../Redux/Products/productsActions'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({

    button: {
        marginRight: 7
    },

    root:{
        display: "flex",
        
    },

    form:{
        display: "flex",
        height: "100px",
    }

})

const Filters = () => {

    const dispatch = useDispatch()

    function handleSelect(e) {
        dispatch(filterByCategory(e.target.value))
    }

    function orderByPrice(type) {
        dispatch(filterByPrice(type))
    }

    const classes = useStyles();

    //------------------------------------    

    return (

        <Grid container className={classes.root}>
            <Grid item>
                <FormControl component="fieldset">
                    <h4>Order By Category</h4>
                    <RadioGroup className={classes.form} aria-label="gender" name="category" onChange={handleSelect}>
                        <FormControlLabel value="Vodka" control={<Radio />} label="Vodka" />
                        <FormControlLabel value="Tequila" control={<Radio />} label="Tequila" />
                        <FormControlLabel value="Whisky" control={<Radio />} label="Whisky" />
                        <FormControlLabel value="Gin" control={<Radio />} label="Gin" />
                        <FormControlLabel value="Liqueur" control={<Radio />} label="Liqueur" />
                        <FormControlLabel value="Brandy" control={<Radio />} label="Brandy" />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item >
                <h4>Order by Price</h4>
                <Button size="small" className={classes.button} variant="contained" color="primary" onClick={() => orderByPrice("MAX")}>
                    HIGHER - LOWER
                </Button>
                <Button size="small" variant="contained" color="primary" onClick={() => orderByPrice("MIN")}>
                    LOWER - HIGHER
                </Button>
            </Grid>
        </Grid>
    )
}

export default Filters
