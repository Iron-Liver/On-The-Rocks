import "./renderCoupons.css"
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoupons } from "../../Redux/Coupon/couponActions"
import { IconButton, Paper } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import { NewReleases } from "@material-ui/icons";
import { Link } from "react-router-dom";
import jwt from "jsonwebtoken";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    width: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: "10px",
    display: "flex"
  },
  onSalePaper: {
    padding: theme.spacing(2),
    marginBottom: "10px",
    display: "flex",
    background: "rgb(255, 244, 244)"
  },
  image: {
    width: 150,
    height: 150,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    marginTop: "5px"
  },
  name: {
    marginLeft: "40px"
  },
  price: {
    // marginLeft: "900px"
  },

}));

const Coupons = () => {
  const [coupons, setCoupons] = useState();

  const localProfile = JSON.parse(localStorage.getItem('token')) ? 
  jwt.verify(JSON.parse(localStorage.getItem('token')), 
  process.env.REACT_APP_SECRET_KEY) : null
  
  const userId = localProfile?.id;


 /*  (async function(){
      let coup = await getCoupons(userId)
      setCoupons(coup)
  })() 

  console.log(coupons)

  if(coup)   */

  

return (
    <div><h1>Coupons</h1></div>);
}
  {/* <div className={classes.root}>
  {coupons?.length > 0 ? (
    coupons?.map((w) => (
      w[0] && 
      <Paper className={w[0].onSale ? classes.onSalePaper : classes.paper}>
        <div className="user-coupons-imgsale-wrapper">
          <div className="usercoupons-img-container">
            <Link to={`/products/${w[0].id}`}>
              <img width="80px" className={classes.img} alt="complex" src={w[0]?.image}/>
            </Link>
            {
              w[0].onSale && (
                <div>
                  <div className="user-coupons-flag-shadow"/>
                  <div className="user-coupons-flag">
                    <NewReleases id="user-coupons-flag-icon"/>
                  </div>
                </div>
              )
            }
          </div>
        </div>
        <div className="user-coupons-description">
          <div style={{ flexGrow: 1 }}>
            <Link to={`/products/${w[0].id}`} style={{ textDecoration: "none", color: "black"}}>
              <h4 className="user-coupons-item-title">{w[0]?.name}</h4>
            </Link>
            {
              w[0].onSale ? (
                <h4 className="user-coupons-item-price">
                  <span style={{
                    color: "rgb(144, 0, 32)"
                  }}>
                    ${w[0].onSale}{" "}
                  </span> 
                  <del
                    className="user-coupons-item-regular"
                    >${w[0]?.price}</del>
                </h4>
              ) : (
                <h4 className="user-coupons-item-price">
                  ${w[0]?.price}
                </h4>
              )
            }
          </div>
          <IconButton
            onClick={(e) => deleteWishh(e, currentUser?.id, w[0]?.id)}
            style={{ padding: "1px" }}
          >
            <DeleteIcon fontSize="medium" />
          </IconButton>
        </div>
      </Paper>
    ))
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
  </div> */}


export default Coupons;
