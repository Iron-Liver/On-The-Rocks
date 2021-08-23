import axios from "axios";
import swal from 'sweetalert'
import { GET_PRODUCT_REVIEWS } from "../../Utils/constants";

export function getProductReviews(id) {
    return async function (dispatch) {
        const { data } = await axios.get(`/review/product/${id}`);
        dispatch({ type: GET_PRODUCT_REVIEWS, payload: data });
    };
}

export function createReview(userId,productId,stars,description) {
    return async function (dispatch) {
        const { data } = await axios.post(`/review/add`,{productId,userId,stars,description})
        await dispatch(getProductReviews(productId))
        data.success? swal(data.success) : swal(data.error)
    }
}



