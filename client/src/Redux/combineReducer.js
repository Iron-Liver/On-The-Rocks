import {combineReducers} from 'redux';
import userReducer from './Users/UserReducer';
import categoryReducer from './Category/categoryReducer'

export const reducers = combineReducers({
    categoryReducer,
    userReducer
});

export default reducers;
