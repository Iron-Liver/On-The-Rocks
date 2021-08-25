import {combineReducers} from 'redux';
import userReducer from './Users/userReducer';
import categoryReducer from './Category/categoryReducer'
import productReducer from './Products/productReducer';

import cartReducer from './Cart/cartReducer'

import reviewReducer from './Reviews/reviewReducer';
import wishlistReducer from './Wishlist/wishlistReducer'

import couponReducer from './Coupon/couponReducer'


export const reducers = combineReducers({
    categoryReducer,
    userReducer,
    productReducer,
    cartReducer,
    reviewReducer,
    wishlistReducer,
    couponReducer

});

export default reducers;
