import { GET_PRODUCTS, CREATE_PRODUCT, CLEAR_PRODUCT, DELETE_PRODUCT } from "../../Utils/constants"

const initialState = {
    Products: [],
    productDetail: undefined,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                Products: action.payload,
            };

        case CREATE_PRODUCT:
            return {
                ...state,
                Products: action.payload,
            };

        case CLEAR_PRODUCT:
            return {
                ...state,
                productDetail: undefined,
            }
        case DELETE_PRODUCT:
            let productsList = Products.filter(product => product.id !== action.payload)
            return {
                ...state,
                Products: productsList,
            }

        default:
            return {
                state,
            };
    }
};

export default productReducer;