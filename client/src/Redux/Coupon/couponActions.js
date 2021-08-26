import axios from "axios";
import { GET_COUPONS, SET_DESC} from "../../Utils/constants";


export function createCoupon(coupon){
    return async function (dispatch) {
        await axios.post(`/coupon/create`, coupon);
    }
}


export function getCoupons(idUser) {
    return async function (dispatch) {
        if(idUser) {
            try {
              const { data } = await axios.get(`/coupon/user/${idUser}`);
              dispatch({ type: GET_COUPONS, payload: data })
            } catch (error) {
              dispatch({ type: GET_COUPONS, payload: [] })
            }
        }
    };
}

export function desAction(desc,code) {
    return async function (dispatch) {
            dispatch({ type: SET_DESC, payload: desc,code })
    };
}