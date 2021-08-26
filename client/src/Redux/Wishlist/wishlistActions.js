import axios from "axios";
import {
    // ADD_PRODUCT_WISHLIST,
    GET_WISHLIST,
    DELETE_WISHLIST
} from "../../Utils/constants";

export function addProductWishlist(obj) {
    console.log('objeto',obj)
    return async function() { 
        await axios.post(`/wishlist/createwishlist`, obj);
    };
}

export function getWishlist() {
    return async function(dispatch) { 
        const wishlist = await axios.get(`/wishlist/getwishlist`);
        dispatch ({type: GET_WISHLIST,  payload: wishlist.data})
    };
}


export function deleteWish(id) {

    return async function (dispatch) {
        await axios.delete(`/wishlist/delete/${id}`);
        dispatch({ type: DELETE_WISHLIST, payload: id });
    }; 
}

/* export function getWishlistId(id) {
    return async function (dispatch) {
        const wishlist = await axios.get(`http://localhost:3001/wishlist/getid/?id=${id}`);
        dispatch({ type: GET_WISHLIST_ID, payload: wishlist.data });
    };
} */


