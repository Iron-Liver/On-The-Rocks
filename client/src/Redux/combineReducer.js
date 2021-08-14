import {combineReducers} from 'redux';
import userReducer from './Users/userReducer';
import categoryReducer from './Category/categoryReducer'
import productReducer from './Products/productReducer';
import cartReducer from './Cart/cartReducer'

export const reducers = combineReducers({
    categoryReducer,
    userReducer,
    productReducer,
    cartReducer,
});

export default reducers;
