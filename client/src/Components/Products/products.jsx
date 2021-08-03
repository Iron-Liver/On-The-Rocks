import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getProducts } from '../../Redux/Products/productsActions'

const Products = () => {

    const products1 = useSelector(state => state.productReducer.FoundProds);
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(getProducts());        
      }, []);
      
    useEffect(() => {
        console.log(products1,"aca")      
      }, [products1]);

    return (
        <div>            
            {products1?.map((spirits) => {
                return (
                    <div>
                        {spirits.name}
                        <img src={spirits.image} alt={"Not Found"}></img>
                    </div>
                )
            })}
        </div>
    )
}

export default Products
