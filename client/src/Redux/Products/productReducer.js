import { GET_PRODUCTS, CLEAR_PRODUCT, GET_PRODUCT_BY_ID, CREATE_PRODUCT, UPDATE_PRODUCT } from "../../Utils/constants"

const initialState = {
    Products: [],
    FoundProds: [],
    createState: [],
    updateState: [],
    productDetail: undefined,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                Products: action.payload,
                FoundProds: action.payload
            };
        case CREATE_PRODUCT:
            return {
                ...state,
                createState: action.payload,
            };
        case UPDATE_PRODUCT:
            return {
                ...state,
                updateState: action.payload,
            };

        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                FoundProds: action.payload
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