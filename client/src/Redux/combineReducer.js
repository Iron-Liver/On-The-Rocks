import {combineReducers} from 'redux';
import userReducer from './Users/userReducer';
import categoryReducer from './Category/categoryReducer'
import productReducer from './Products/productReducer';
import reviewReducer from './Reviews/reviewReducer';

export const reducers = combineReducers({
    categoryReducer,
    userReducer,
    productReducer,
    reviewReducer
});

export default reducers;
