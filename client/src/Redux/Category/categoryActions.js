import axios from 'axios';
import { CREATE_CATEGORY, CLEAR_CATEGORY_REPLY, READ_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../../Utils/constants';

export function createCategory(category) {
    return async function (dispatch) {
        const { data } = await axios.post(`/category/add`, category);
        dispatch({ type: CREATE_CATEGORY, payload: data });
    };
}

export function readCategoryID(id) {
    return async function (dispatch) {
        const { data } = await axios.get(`/category/read/${id}`);
        dispatch({ type: READ_CATEGORY, payload: data });
    };
}

export function updateCategory(id,category){
    return async function (dispatch) {
        const { data } = await axios.put(`/category/update/${id}`, category);
        dispatch({ type: UPDATE_CATEGORY, payload: data });
    };
}

export function deleteCategory(id){
    return async function (dispatch) {
        const { data } = await axios.delete(`/category/delete/${id}`);
        dispatch({ type: DELETE_CATEGORY, payload: data });
    };
}

export function clearCategoryReply() {
    return async function (dispatch) {
        dispatch({ type: CLEAR_CATEGORY_REPLY, payload:	 null });
    };
}