import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../Redux/Products/productsActions";
import SaleCard from "./saleCard";
import './onSale.css'


const Sale = () => {
    const { Products } = useSelector(
        (state) => state.productReducer
    );
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(getProducts());
        },
        // eslint-disable-next-line
        []
    );
    var sale = Products.filter((spirit) => spirit.onSale > 0)

    return (
        <div>
            <div className="content">
                {sale.map((spirit) => (
                    <SaleCard spirit={spirit} key={spirit.id} />                
                ))}
            </div>
        </div>
    );
};

export default Sale;
