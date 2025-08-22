import { IconButton, CardContent } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import makeStyles from '@mui/styles/makeStyles';
import CreateOrder from "../Orders/CreateOrder/createOrder";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getCoupons } from "../../Redux/Coupon/couponActions";
import "./cart.css";
import verifyUser from "../../Utils/verifyUser";
import swal from "sweetalert";
import { logOutUser } from "../../Redux/Users/userActions";
import CustomButton from "../Button/CustomButton";

const useStyles = makeStyles((theme) => ({
    actions: {
        display: "flex",
        alignItems: "baseline",
    },
    sum: {
        display: "flex",
        alignItems: "center",
    },
}));

export function Cart() {
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    let data = JSON.parse(localStorage.getItem("data"));
    var total = 0;
    var subTotal = 0;

    const [state, setState] = useState();
    const [cupon, setCupon] = useState("");

    if (JSON.stringify(state) !== JSON.stringify(data)) setState(data);

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
    }, [dispatch, userId]);

    function removeProduct(id) {
        let data = JSON.parse(localStorage.getItem("data"));
        data = data.filter((e) => e.id !== id);
        localStorage.removeItem("data");
        localStorage.setItem("data", JSON.stringify(data));
        setState(data);
    }
    if (subTotal === 0) {
        state?.forEach((e) => (subTotal = parseFloat(subTotal) + parseFloat(e.price)));
        localStorage.removeItem("total");
        localStorage.setItem("total", JSON.stringify(subTotal));
    }

    function sum(id) {
        state?.forEach((e) => {
            if (e.id === id && e.units < e.stock) {
                let sub = parseFloat(e.price) / parseInt(e.units);
                e.units++;
                sub = parseFloat(sub) * e.units;
                e.price = parseFloat(sub).toFixed(2);
            }
        });

        localStorage.removeItem("data");
        localStorage.setItem("data", JSON.stringify(state));
        let data = JSON.parse(localStorage.getItem("data"));
        setState(data);

        state?.forEach((e) => (subTotal = parseFloat(subTotal) + parseFloat(e.price)));
        subTotal = subTotal.toFixed(2);
    }

    function res(id) {
        state?.forEach((e) => {
            if (e.id === id && e.units > 1) {
                let sub = parseFloat(e.price) / parseInt(e.units);
                e.units--;
                sub = parseFloat(sub) * e.units;
                e.price = sub.toFixed(2);
            }
        });
        localStorage.removeItem("data");
        localStorage.setItem("data", JSON.stringify(state));
        let data = JSON.parse(localStorage.getItem("data"));
        state?.forEach((e) => (subTotal = parseFloat(subTotal) + parseFloat(e.price)));
        subTotal = parseFloat(subTotal).toFixed(2);
        localStorage.removeItem("total");
        localStorage.setItem("total", JSON.stringify(subTotal));
        setState(data);
    }

    function handleSelect(e) {
        let id = 0;
        Coupons.forEach((cop) => {
            if (cop.discount === parseFloat(e.target.value)) return (id = cop.id);
        });
        localStorage.removeItem("coup");
        localStorage.setItem("coup", JSON.stringify(id));
        setCupon(e.target.value);
    }

    if (cupon) {
        console.log("cupon", cupon);
        total = parseFloat(subTotal).toFixed(2) - parseFloat(subTotal).toFixed(2) * cupon;
        total = parseFloat(total).toFixed(2);
        localStorage.removeItem("total");
        localStorage.setItem("total", JSON.stringify(total));
    } else {
        total = parseFloat(subTotal).toFixed(2);
    }

    return (
        <CardContent className={classes.content}>
            {state?.length > 0 ? (
                <div>
                    {state?.map((e) => (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                paddingBottom: "15px",
                                borderBottom: "1px solid #d3d3d3",
                            }}
                            key={e.id}
                        >
                            <div style={{ display: "flex", alignItems: "flex-start" }}>
                                  <h4 style={{ flexGrow: 1 }}>
                                    <Link to={`/products/${e.id}`} style={{textDecoration: "none", color: "black"}}>
                                      {e.name}
                                    </Link>
                                  </h4>
                                <IconButton
                                    aria-label="delete"
                                    className={classes.margin}
                                    onClick={() => removeProduct(e.id)}
                                    size="large">
                                    <DeleteIcon fontSize="medium" />
                                </IconButton>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <div style={{ flexGrow: 1 }}>
                                    <div
                                        style={{
                                            width: "90px",
                                            height: "90px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "50%",
                                            background: "white",
                                            overflow: "hidden",
                                            border: "1px solid #d3d3d3",
                                        }}
                                    >
                                        <img
                                            src={e.image}
                                            alt={e.name}
                                            width="75px"
                                            onError={(ev) => {
                                              ev.currentTarget.onerror = null;
                                              ev.currentTarget.src = '/android-icon-192x192.png';
                                            }}
                                        />
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        width: "138px",
                                    }}
                                >
                                    <h4 style={{ fontWeight: 400 }}>
                                        <span style={{ fontSize: "12px" }}>
                                            SubTotal:{" "}
                                        </span>
                                        ${parseFloat(e.price).toFixed(2)}
                                    </h4>
                                    <div className={classes.sum}>
                                        <CustomButton
                                            width="30px"
                                            height="30px"
                                            onClick={() => res(e.id)}
                                            rounded
                                            inner="-"
                                        />
                                        <h4
                                            style={{
                                                width: "20px",
                                                textAlign: "center",
                                            }}
                                        >
                                            {e.units}
                                        </h4>
                                        <CustomButton
                                            width="30px"
                                            height="30px"
                                            onClick={() => sum(e.id)}
                                            rounded
                                            inner="+"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className={classes.box}>
                        <div
                            style={{
                                width: "max-content",
                                margin: "0 auto 15px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                            }}
                        >
                            <h4
                                style={{
                                    marginBottom: "0",
                                    fontFamily: `"Montserrat", sans-serif`,
                                    fontWeight: 400,
                                }}
                            >
                                Coupons:
                            </h4>
                            {Coupons?.length > 0 ? (
                                <div className="form-group">
                                    <select
                                        name="coupons"
                                        className="form-control-Cart"
                                        onChange={(e) => handleSelect(e)}
                                        style={{
                                            fontFamily: `"Montserrat", sans-serif`,
                                            fontWeight: 400,
                                        }}
                                    >
                                        <option key="999" value="0" selected>
                                            {" "}
                                            Select coupon{" "}
                                        </option>
                                        {Coupons.map((coup) => (
                                            <option
                                                key={coup.id}
                                                value={coup.discount}
                                            >
                                                Coupon for:{" "}
                                                {coup.discount * 100}%
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            ) : (
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <h4 id="user-coupons-empty-message">
                                        No coupons...
                                    </h4>
                                </div>
                            )}
                        </div>
                    </div>
                    {parseFloat(total) < parseFloat(subTotal) ? (
                        <div className={classes.box}>
                            {cupon ? (
                                <div>
                                    <h4
                                        style={{
                                            textAlign: "center",
                                            fontWeight: 300,
                                        }}
                                    >
                                        Before:{" "}
                                        <del>
                                            ${parseFloat(subTotal).toFixed(2)}
                                        </del>
                                    </h4>
                                    <h2
                                        style={{
                                            textAlign: "center",
                                            fontFamily: `"Montserrat", sans-serif`,
                                            fontWeight: 400,
                                        }}
                                    >
                                        Total: ${parseFloat(total).toFixed(2)}
                                    </h2>
                                </div>
                            ) : (
                                <div>
                                    <h4
                                        style={{
                                            textAlign: "center",
                                            fontWeight: 300,
                                        }}
                                    >
                                        No coupons
                                    </h4>
                                </div>
                            )}
                        </div>
                    ) : (
                        <h2
                            style={{
                                textAlign: "center",
                                fontFamily: `"Montserrat", sans-serif`,
                                fontWeight: 400,
                            }}
                        >
                            Total: ${parseFloat(subTotal).toFixed(2)}
                        </h2>
                    )}
                    <div style={{ textAlign: "center" }}>
                        <CreateOrder />
                    </div>
                </div>
            ) : (
                <h4
                    style={{
                        textAlign: "center",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "30px",
                    }}
                >
                    There are no items in the cart
                </h4>
            )}
        </CardContent>
    );
}
