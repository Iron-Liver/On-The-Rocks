import axios from "axios";
import {
    // ADD_PRODUCT_WISHLIST,
    GET_WISHLIST,
    DELETE_WISHLIST
} from "../../Utils/constants";

export function addProductWishlist(obj) {
    console.log('objeto',obj)
    return async function() { 
        try {
            await axios.post(`/wishlist/createwishlist`, obj);
        } catch (err) {
            console.warn("addProductWishlist failed:", err?.message || err);
        }
    };
}

export function getWishlist() {
    return async function(dispatch) { 
        try {
            const wishlist = await axios.get(`/wishlist/getwishlist`);
            dispatch ({type: GET_WISHLIST,  payload: wishlist.data})
        } catch (err) {
            console.warn("getWishlist failed:", err?.message || err);
            dispatch({ type: GET_WISHLIST, payload: [] });
        }
    };
}

export function deleteWish(id) {

    return async function (dispatch) {
        try {
            await axios.delete(`/wishlist/delete/${id}`);
            dispatch({ type: DELETE_WISHLIST, payload: id });
        } catch (err) {
            console.warn("deleteWish failed:", err?.message || err);
        }
    }; 
}

/* export function getWishlistId(id) {
    return async function (dispatch) {
        const wishlist = await axios.get(`http://localhost:3001/wishlist/getid/?id=${id}`);
        dispatch({ type: GET_WISHLIST_ID, payload: wishlist.data });
    };
} */
