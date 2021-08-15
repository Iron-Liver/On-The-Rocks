import {combineReducers} from 'redux';
import UserReducer from './Users/userReducer';
import categoryReducer from './Category/categoryReducer'
import productReducer from './Products/productReducer';

export const reducers = combineReducers({
    categoryReducer,
    UserReducer,
    productReducer
});

export default reducers;
