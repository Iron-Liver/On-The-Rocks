import {combineReducers} from 'redux';
import userReducer from './Users/UserReducer';
import categoryReducer from './Category/categoryReducer'
import productReducer from './Products/productReducer';

export const reducers = combineReducers({
    categoryReducer,
    userReducer,
    productReducer
});

export default reducers;
