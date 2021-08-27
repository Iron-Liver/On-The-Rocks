import "./renderCoupons.css"
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoupons } from "../../Redux/Coupon/couponActions"
import Select from 'react-select'
import jwt from "jsonwebtoken";


const CouponsCart = () => {

  const localProfile = JSON.parse(localStorage.getItem('token')) ? 
  jwt.verify(JSON.parse(localStorage.getItem('token')), 
  process.env.REACT_APP_SECRET_KEY) : null
  const userId = localProfile?.id;

  const { Coupons } = useSelector((state) => state.couponReducer);  

  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(getCoupons(userId));
    }, []);


 console.log(Coupons)

 return (
  <div>
  {Coupons?.length > 0 ? (
   <Select>
    {Coupons.map((coup) =>{
        <option></option>
    })}
   </Select>
    ) : (
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "55vh"
        }}>
          <h4 id="user-coupons-empty-message">Nothing to show...</h4>
        </div>
      )}
  </div> 
  );
}

export default CouponsCart;
