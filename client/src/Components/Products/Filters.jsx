import { useEffect, React } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { filterByCategory, filterByPrice } from '../../Redux/Products/productsActions'
import { Button } from '@material-ui/core';
import { getAllCategories } from '../../Redux/Category/categoryActions';
import './Filters.css'


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
    //------------------------------------    

    return (
             <div className="filterContainer">
                <div>
                    <h4 style={{ color: "#323031" }}>Order by categories</h4>
                    <select onChange={handleSelect}>
                        {
                            categories && categories.map(category =>
                                <option value={category.id} key={category.name}>{category.name}</option>
                            )
                        }
                    </select>
                </div>
                <div>
                <h4 style={{ color: "#323031" }} className="">Order by Price</h4>
                    <Button size="small" className='' variant="contained" color="primary" onClick={() => orderByPrice("MAX")}>
                        HIGHER
                    </Button>
                    <Button size="small" variant="contained" color="primary" onClick={() => orderByPrice("MIN")}>
                        LOWER
                    </Button>
                </div>
              </div>
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