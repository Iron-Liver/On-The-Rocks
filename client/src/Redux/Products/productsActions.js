import axios from 'axios';
import { GET_PRODUCTS, CLEAR_PRODUCT, CREATE_PRODUCT} from "../../Utils/constants"


export function clearProductDetail() {
    return async function (dispatch) {
        dispatch({ type: CLEAR_PRODUCT, payload: null });
    };
}

export function createProduct(product) {
    return async function (dispatch) {
        const { data } = await axios.post(`/product/add`, product);
        dispatch({ type: CREATE_PRODUCT, payload: data });
    };
}

export function getProducts() {
    return async function (dispatch) {
        const products = await axios.get(`http://localhost:3001/product`);
        dispatch({ type: GET_PRODUCTS, payload: products.data });
    };
}

export function getProductById(id) {
    return async function (dispatch) {
      const product = await axios.get(`http://localhost:3001/product/${id}`);
        dispatch({ type: "GET_PRODUCT_BY_ID", payload: product.data,
        });
    };
}