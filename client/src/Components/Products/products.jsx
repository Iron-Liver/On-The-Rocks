import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { getProducts } from '../../Redux/Products/productsActions'
import  './products.css';
import Filters from './Filters';
import ProductCard from './productCard';


const Products = () => {

    const {FoundProds, Products} = useSelector(state => state.productReducer)
    const dispatch = useDispatch()
    const {search} = window.location

    const products = search.includes('?search') 
                    ? Products?.filter(product => product.name.toLowerCase().includes(search.substring(8).toLowerCase().split('-').join(' ')))
                    : FoundProds

    useEffect(() => {
        dispatch(getProducts());
    }, 
    // eslint-disable-next-line
    []);

    return (
      <div>
        <div className="filters">
          <Filters/>
        </div>
        <div className="content">
            {products.map(spirit => 
                <ProductCard spirit={spirit} />
            )}
        </div>
      </div>

    )
}

export default Products;