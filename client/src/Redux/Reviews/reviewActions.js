import axios from "axios";
import { GET_PRODUCT_REVIEWS } from "../../Utils/constants";

export function getProductReviews(id) {
    return async function (dispatch) {
        const { data } = await axios.get(`/review/product/${id}`);
        dispatch({ type: GET_PRODUCT_REVIEWS, payload: data });
    };
}
