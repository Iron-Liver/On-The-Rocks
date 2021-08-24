import axios from "axios";

export function createCoupon(coupon){
    console.log(coupon)
    return async function (dispatch) {
        await axios.post(`/coupon/create`, coupon);
    }
}


export function getCoupons(idUser) {
    return async function (dispatch) {
           const { data } = await axios.get(`coupon/user/${idUser}`);
            return data;
         
    };
}
