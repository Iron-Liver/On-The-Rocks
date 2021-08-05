import { GET_PRODUCTS, CREATE_PRODUCT, CLEAR_PRODUCT, GET_PRODUCT_BY_ID,DELETE_PRODUCT } from "../../Utils/constants"


const initialState = {
    Products: [],
    FoundProds: [],
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

        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                FoundProds: action.payload
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
            
            return {
                ...state,                
                Products: state.FoundProds.filter(product => product.id !== action.payload)
            }

        default:
            return {
                state,
            };
    }
};

export default productReducer;