import axios from 'axios';
import { CREATE_CATEGORY, CLEAR_CATEGORY_REPLY, READ_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY, GET_ALL_CATEGORIES } from '../../Utils/constants';

export function getAllCategories(){
    return async function (dispatch) {
        try {
            const {data} = await axios.get('/category/all');
            dispatch({ type: GET_ALL_CATEGORIES, payload: data})
        } catch (err) {
            console.warn('getAllCategories failed:', err?.message || err);
            dispatch({ type: GET_ALL_CATEGORIES, payload: [] });
        }
    }
}

export function createCategory(category) {
    return async function (dispatch) {
        try {
            const { data } = await axios.post(`/category/add`, category);
            dispatch({ type: CREATE_CATEGORY, payload: data });
        } catch (err) {
            console.warn('createCategory failed:', err?.message || err);
        }
    };
}

export function readCategoryID(id) {
    return async function (dispatch) {
        try {
            const { data } = await axios.get(`/category/read/${id}`);
            dispatch({ type: READ_CATEGORY, payload: data });
        } catch (err) {
            console.warn('readCategoryID failed:', err?.message || err);
            dispatch({ type: READ_CATEGORY, payload: null });
        }
    };
}

export function updateCategory(id,category){
    return async function (dispatch) {
        try {
            const { data } = await axios.put(`/category/update/${id}`, category);
            dispatch({ type: UPDATE_CATEGORY, payload: data });
        } catch (err) {
            console.warn('updateCategory failed:', err?.message || err);
        }
    };
}

export function deleteCategory(id){
    return async function (dispatch) {
        try {
            const { data } = await axios.delete(`/category/delete/${id}`);
            dispatch({ type: DELETE_CATEGORY, payload: data });
        } catch (err) {
            console.warn('deleteCategory failed:', err?.message || err);
        }
    };
}

export function clearCategoryReply() {
    return async function (dispatch) {
        dispatch({ type: CLEAR_CATEGORY_REPLY, payload:	 null });
    };
}