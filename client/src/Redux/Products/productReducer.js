import { GET_PRODUCTS, CLEAR_PRODUCT, GET_PRODUCT_BY_ID, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, FILTER_BY_CATEGORY, FILTER_BY_PRICE, FILTER_BY_NAME } from "../../Utils/constants"


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
            console.log('FoundProds', action.payload, action.type)
            return {
                ...state,
                FoundProds: action.payload
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

        case FILTER_BY_CATEGORY:
            return {
                ...state,
                FoundProds: state.Products.filter(liquor => liquor.category === action.payload)
            };

        case FILTER_BY_PRICE:
            return {
                ...state,
                FoundProds: [...state.FoundProds]?.sort((a, b) => {
                    if (a.price < b.price) {
                        return action.payload === "MAX" ? 1 : -1;
                    }
                    if (a.price > b.price) {
                        return action.payload === "MAX" ? -1 : 1;
                    }
                    return 0;

                })
            }
        case FILTER_BY_NAME:
            return {
                ...state,
                FoundProds: [...state.FoundProds]?.filter(product => product.name.includes(action.payload))
            }

        default:
            return {
                state,
            };
    }
};

export default productReducer;