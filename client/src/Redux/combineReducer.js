import {combineReducers} from 'redux';
import UserReducer from './Users/UserReducer';
import categoryReducer from './Category/categoryReducer'
import productReducer from './Products/productReducer';

export const reducers = combineReducers({
    categoryReducer,
    UserReducer,
    productReducer
});

export default reducers;
