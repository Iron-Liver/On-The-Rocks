import "./renderCoupons.css";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCoupons } from "../../Redux/Coupon/couponActions";
import Select from "react-select";
import verifyUser from "../../Utils/verifyUser";
import swal from "sweetalert";
import { logOutUser } from "../../Redux/Users/userActions";

const CouponsCart = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const localProfile = verifyUser();
    if (localProfile?.hasOwnProperty("logout")) {
        dispatch(logOutUser());
        history.push("/");
        swal("Session expired", "Please login", "warning");
    }

    const userId = localProfile?.id;

    const { Coupons } = useSelector((state) => state.couponReducer);

    useEffect(() => {
        dispatch(getCoupons(userId));
    }, []);

    console.log(Coupons);

    return (
        <div>
            {Coupons?.length > 0 ? (
                <Select>
                    {Coupons.map((coup) => {
                        <option></option>;
                    })}
                </Select>
            ) : (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "55vh",
                    }}
                >
                    <h4 id="user-coupons-empty-message">Nothing to show...</h4>
                </div>
            )}
        </div>
    );
};

export default CouponsCart;
