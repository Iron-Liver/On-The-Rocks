import "./renderCoupons.css"
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoupons } from "../../Redux/Coupon/couponActions"
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
  const classes = useStyles();
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
  <div className={classes.root}>
  {Coupons?.length > 0 ? (
    Coupons?.map((w) => (
      <Paper className={classes.paper}>
        <div className="user-coupons-description">
          <div style={{ flexGrow: 1 }}>
              <h2 className="user-coupons-item-title">Coupon code: {w.code}</h2>
              <h2 className="user-coupons-item-price">Discount amount: {w.discount * 100}%</h2>
          </div>   
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
  </div> 
  );
}

export default Coupons;
