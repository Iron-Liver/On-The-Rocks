import { GET_PRODUCTS, CLEAR_PRODUCT } from "../../Utils/constants"

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

        case CLEAR_PRODUCT:
            return {
                ...state,
                productDetail: undefined,
            }

        default:
            return {
                state,
            };
    }
};

export default productReducer;