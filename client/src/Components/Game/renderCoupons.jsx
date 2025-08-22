import "./renderCoupons.css";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import { getCoupons } from "../../Redux/Coupon/couponActions";
import makeStyles from '@mui/styles/makeStyles';
import { logOutUser } from "../../Redux/Users/userActions";
import verifyUser from "../../Utils/verifyUser";
import swal from "sweetalert";

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "30px 30px",  
        minHeight: "85vh",
    },
    paper: {
        padding: theme.spacing(2),
        marginBottom: "10px",
        display: "flex",
    },
    onSalePaper: {
        padding: theme.spacing(2),
        marginBottom: "10px",
        display: "flex",
        background: "rgb(255, 244, 244)",
    },
    image: {
        width: 150,
        height: 150,
    },
    img: {
        margin: "auto",
        display: "block",
        maxWidth: "100%",
        maxHeight: "100%",
        marginTop: "5px",
    },
    name: {
        marginLeft: "40px",
    },
    price: {
        // marginLeft: "900px"
    },
}));

const Coupons = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    const localProfile = verifyUser();
    if (localProfile?.hasOwnProperty("logout")) {
        dispatch(logOutUser());
        history.push("/");
        swal("Session expired", "Please login", "warning");
    }
    const userId = localProfile?.id;
    const { Coupons } = useSelector((state) => state.couponReducer);
    useEffect(
        () => {
            dispatch(getCoupons(userId));
        }, // eslint-disable-next-line
        []
    );


    return (
      <div className="user-coupons-tab-container">
        <div className={classes.root}>
            {Coupons?.length > 0 ? (
                Coupons?.map((w) => (
                    <div className = "user-coupons-order" key={w.id}>
                        {w.discount === 0.02? (
                         <div className="user-coupons-description">                      
                                    <div>
                                      <img alt="coupon2%" src={"/images/Coupon2.png"}/>
                                    </div>
                    
                        </div>
                        ):
                        w.discount === 0.05? (
                            <div className="user-coupons-description">
                                <div>
                                  <img alt="coupon5%" src={"/images/Coupon5.png"}/>
                                </div>
                            </div>):
                        w.discount === 0.10? (
                            <div className="user-coupons-description">
                                <div>
                                  <img alt="coupon10%" src={"/images/Coupon10.png"}/>
                                </div>
                            </div>):
                        w.discount === 0.15? (
                            <div className="user-coupons-description">
                                <div>
                                  <img alt="coupon15%" src={"/images/Coupon15.png"}/>
                                </div>
                            </div>): 
                        w.discount === 0.20? (
                                <div className="user-coupons-description">
                                    <div>
                                      <img alt="coupon20%" src={"/images/Coupon20.png"}/>
                                    </div>
                                </div>):  
                        w.discount === 0.25? (
                            <div className="user-coupons-description">
                                <div>
                                  <img alt="coupon25%" src={"/images/Coupon25.png"}/>
                                </div>
                            </div>):     
                     (
                            <div className="user-coupons-description">
                                <div>
                                  <img alt="coupon50%" src={"/images/Coupon50.png"}/>
                                </div>
                            </div>)   
                    }</div>
                ))
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
      </div>
    );
};

export default Coupons;
