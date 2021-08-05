import axios from 'axios';
import { GET_PRODUCTS, CLEAR_PRODUCT } from "../../Utils/constants"


export function clearProductDetail() {
    return async function (dispatch) {
        dispatch({ type: CLEAR_PRODUCT, payload: null });
    };
}

export function getProducts() {
    return async function (dispatch) {
        const { products } = await axios.get(`/products/`);
        dispatch({ type: GET_PRODUCTS, payload: products });
    };
}