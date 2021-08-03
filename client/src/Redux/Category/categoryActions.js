import axios from 'axios';
import { CREATE_CATEGORY, CLEAR_CATEGORY } from '../../Utils/constants';

export function createCategory(category) {
    return async function (dispatch) {
        const { data } = await axios.post(`/category/add`, category);
        dispatch({ type: CREATE_CATEGORY, payload: data });
    };
}

export function clearCategoryDetail() {
    return async function (dispatch) {
        dispatch({ type: CLEAR_CATEGORY, payload: null });
    };
}