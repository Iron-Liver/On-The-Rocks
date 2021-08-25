import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "@material-ui/core";
import { useForm } from "./useForm";
import { Link, useHistory } from "react-router-dom";
import { userSchema1, userSchema2 } from "./ValidationOrder";
import "./CreateOrder.css";
import verifyUser from "../../../Utils/verifyUser";
import axios from "axios";
import mercadopagoimg from "../../../assets/mercado-pago.png";
import { logOutUser } from "../../../Redux/Users/userActions";

let initialForm1 = {
    firstName: "",
    lastName: "",
    phone: 0,
};
let initialForm2 = {
    address: "",
    city: "",
    zipCode: "",
};

const CreateOrder = () => {
    const [count, setCount] = useState(1);
    const [modal, setModal] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const openCloseModal = () => {
        setModal(!modal);
        setState1({});
        setState2({});
        setCount(1);
    };

    const nextPage1 = async (e) => {
        e.preventDefault();
        const isValid1 = await userSchema1.isValid(state1);
        if (isValid1) setCount(count + 1);
    };


  const nextPage2 = async (e) => {
    e.preventDefault()
    const isValid2 = await userSchema2.isValid(state2);
    if(isValid2) setCount(count + 1);
  }
  
  const {Desc} = useSelector(state => state.couponReducer)
  console.log(Desc)


    const currentUser = verifyUser();
    if (currentUser?.hasOwnProperty("logout")) {
        dispatch(logOutUser());
        window.location.replace(`${window.location.origin}/login`);
        alert("please login");
    }

  const SubmitForm = async () => { 
    const order = {
       ...state1, ...state2,
      id: currentUser.id,
      paymentMethod: 'mercadopago' ,
      total: JSON.parse(localStorage.getItem('total')),
      cart: JSON.parse(localStorage.getItem('data')).map(({id, units, price}) => {
        return {
          id, 
          units, 
          price
        }
      })
    }

    try {
      var coup = JSON.parse(localStorage.getItem('coup'))
      if(coup > 0){ axios.delete(`/coupon/delete/${coup}`)}
      localStorage.removeItem("coup");

      const { data } = await axios.post('/order/addOrder', order);
      if(data) {
        localStorage.removeItem("data");
      }
      openCloseModal()
      history.push(`/mercadopago/${data.orderId}`);
    } catch (err) {
      console.error(err) 
    }
  }

    const {
        state1,
        setState1,
        state2,
        setState2,
        handleInputChange1,
        handleInputChange2,
    } = useForm({ initialForm2, initialForm1 });

    return (
        <div>
            {/*         
<div class="center">
  <p className="pe">Socials :</p>
  <div id="social-test">
    <ul class="social">
      <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
      <li><i class="fa fa-twitter" aria-hidden="true"></i></li>
      <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
      <li><i class="fa fa-github" aria-hidden="true"></i></li>
    </ul>
  </div>
</div> */}
            {currentUser ? (
                JSON.parse(localStorage.getItem("data")) &&
                !!JSON.parse(localStorage.getItem("data")).length && (
                    <Button
                        color="primary"
                        variant="outlined"
                        onClick={openCloseModal}
                    >
                        Pay
                    </Button>
                )
            ) : (
                <Link to="/login">
                    <Button color="primary" variant="outlined">
                        Login
                    </Button>
                </Link>
            )}
            <Modal closeAfterTransition open={modal} onClose={openCloseModal}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "40px",
                        width: "100%",
                        flexGrow: "1",
                    }}
                >
                    {count === 1 ? (
                        <div className="Full_card">
                            <div className="containerpayment">
                                <div className="exit">
                                    <button onClick={openCloseModal}>
                                        {" "}
                                        X{" "}
                                    </button>
                                </div>
                                <div className="card1">
                                    <h1 className="card1_title">
                                        Personal Details{" "}
                                        <i class="fas fa-address-book"></i>
                                    </h1>
                                    <div className="subtitle_form">
                                        <p className="card1_title-info">
                                            Step 1: Basic info
                                        </p>
                                    </div>
                                    <form className="card1_form">
                                        <div className="input">
                                            <input
                                                type="text"
                                                name="firstName"
                                                className={
                                                    state1.firstName
                                                        ? "input_field"
                                                        : "input_fieldw"
                                                }
                                                onChange={handleInputChange1}
                                                value={state1.firstName}
                                                required
                                            />
                                            <label
                                                id="firstname"
                                                className="input_label"
                                                label="First Name"
                                            >
                                                First Name -{" "}
                                                <i class="fas fa-user"></i>{" "}
                                                {state1.firstName?.length >=
                                                3 ? (
                                                    <i
                                                        class="fas fa-check"
                                                        style={{
                                                            color: "green",
                                                        }}
                                                    ></i>
                                                ) : (
                                                    <i
                                                        style={{ color: "red" }}
                                                        class="fas fa-times"
                                                    ></i>
                                                )}{" "}
                                            </label>
                                        </div>
                                        <div class="input">
                                            <input
                                                name="lastName"
                                                type="text"
                                                value={state1.lastName}
                                                onChange={handleInputChange1}
                                                className={
                                                    state1.lastName
                                                        ? "input_field"
                                                        : "input_fieldw"
                                                }
                                                required
                                            />
                                            <label
                                                type="text"
                                                className="input_label"
                                            >
                                                Last Name -{" "}
                                                <i class="fas fa-user-check"></i>{" "}
                                                {state1.lastName?.length >=
                                                3 ? (
                                                    <i
                                                        class="fas fa-check"
                                                        style={{
                                                            color: "green",
                                                        }}
                                                    ></i>
                                                ) : (
                                                    <i
                                                        style={{ color: "red" }}
                                                        class="fas fa-times"
                                                    ></i>
                                                )}
                                            </label>
                                        </div>
                                        <div class="input">
                                            <input
                                                type="text"
                                                className={
                                                    state1.phone
                                                        ? "input_field"
                                                        : "input_fieldw"
                                                }
                                                name="phone"
                                                value={state1.phone}
                                                onChange={handleInputChange1}
                                                required
                                            />
                                            <label className="input_label">
                                                Phone Number -{" "}
                                                <i class="fas fa-mobile-alt"></i>{" "}
                                                {state1.phone?.length >= 6 &&
                                                !isNaN(state1.phone) ? (
                                                    <i
                                                        class="fas fa-check"
                                                        style={{
                                                            color: "green",
                                                        }}
                                                    ></i>
                                                ) : (
                                                    <i
                                                        style={{ color: "red" }}
                                                        class="fas fa-times"
                                                    ></i>
                                                )}{" "}
                                            </label>
                                        </div>
                                        <div className="btn_cont1">
                                            <button
                                                className="card1_button"
                                                style={{ width: "46%" }}
                                                onClick={nextPage1}
                                            >
                                                Next
                                            </button>
                                        </div>
                                        <p className="p_color">
                                            Need help?{" "}
                                            <Link to="/help" className="help">
                                                {" "}
                                                click here!{" "}
                                            </Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    ) : null}

                    {count === 2 ? (
                        <div className="Full_card">
                            <div className="containerpayment">
                                <div className="exit">
                                    <button onClick={openCloseModal}>
                                        {" "}
                                        X{" "}
                                    </button>
                                </div>
                                <div className="card1">
                                    <h1 className="card1_title">
                                        Personal Details{" "}
                                        <i class="fas fa-thumbtack"></i>
                                    </h1>
                                    <p className="card1_title-info">
                                        Step 2: Locate{" "}
                                    </p>
                                    <form className="card1_form">
                                        <div className="input">
                                            <input
                                                type="text"
                                                className={
                                                    state2.address
                                                        ? "input_field"
                                                        : "input_fieldw"
                                                }
                                                name="address"
                                                value={state2.address}
                                                onChange={handleInputChange2}
                                                required
                                            />
                                            <label className="input_label">
                                                Address -{" "}
                                                {
                                                    <i class="fas fa-address-card"></i>
                                                }{" "}
                                                {state2.address?.length >= 6 ? (
                                                    <i
                                                        class="fas fa-check"
                                                        style={{
                                                            color: "green",
                                                        }}
                                                    ></i>
                                                ) : (
                                                    <i
                                                        style={{ color: "red" }}
                                                        class="fas fa-times"
                                                    ></i>
                                                )}
                                            </label>
                                        </div>
                                        <div class="input">
                                            <input
                                                type="text"
                                                name="city"
                                                value={state2.city}
                                                onChange={handleInputChange2}
                                                className={
                                                    state2.city
                                                        ? "input_field"
                                                        : "input_fieldw"
                                                }
                                                required
                                            />
                                            <label
                                                type="text"
                                                className="input_label"
                                            >
                                                City -{" "}
                                                <i class="fas fa-location-arrow"></i>{" "}
                                                {state2.city?.length >= 3 ? (
                                                    <i
                                                        class="fas fa-check"
                                                        style={{
                                                            color: "green",
                                                        }}
                                                    ></i>
                                                ) : (
                                                    <i
                                                        style={{ color: "red" }}
                                                        class="fas fa-times"
                                                    ></i>
                                                )}
                                            </label>
                                        </div>
                                        <div class="input">
                                            <input
                                                type="text"
                                                className={
                                                    state2.zipCode
                                                        ? "input_field"
                                                        : "input_fieldw"
                                                }
                                                name="zipCode"
                                                value={state2.zipCode}
                                                onChange={handleInputChange2}
                                                required
                                            />
                                            <label className="input_label">
                                                Zip Code -{" "}
                                                <i class="fas fa-map-marker-alt"></i>{" "}
                                                {state2.zipCode?.length >= 3 ? (
                                                    <i
                                                        class="fas fa-check"
                                                        style={{
                                                            color: "green",
                                                        }}
                                                    ></i>
                                                ) : (
                                                    <i
                                                        style={{ color: "red" }}
                                                        class="fas fa-times"
                                                    ></i>
                                                )}
                                            </label>
                                        </div>
                                        <div className="btn_group">
                                            <button
                                                className="card1_button"
                                                onClick={() =>
                                                    setCount(count - 1)
                                                }
                                            >
                                                Back
                                            </button>
                                            <div className="divis"></div>
                                            <button
                                                className="card1_button"
                                                onClick={nextPage2}
                                            >
                                                Next
                                            </button>
                                        </div>
                                        <p>
                                            Need help?{" "}
                                            <Link to="/help" className="help">
                                                {" "}
                                                click here!{" "}
                                            </Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    ) : null}

                    {count === 3 ? (
                        <div className="Full_card">
                            <div className="containerpayment">
                                <div className="exit">
                                    <button onClick={openCloseModal}>
                                        {" "}
                                        X{" "}
                                    </button>
                                </div>
                                <div className="card1">
                                    <h1
                                        className="card1_title"
                                        style={{
                                            marginTop: "20px",
                                            marginBottom: "25px",
                                        }}
                                    >
                                        Payment method{" "}
                                        <i class="fas fa-money-check-alt"></i>
                                    </h1>
                                    <form className="card1_form">
                                        <div class="mercadoPagoCont">
                                            <input
                                                type="radio"
                                                id="mercadopago"
                                                name="mercadopago"
                                                value={state2.mercadopago}
                                            />
                                            <label for="mercadopago">
                                                <img
                                                    className="imgmercadopago"
                                                    src={mercadopagoimg}
                                                    alt="mercadopago"
                                                ></img>
                                            </label>
                                        </div>
                                        <div className="btn_group"></div>
                                        <p>
                                            Need help?{" "}
                                            <Link to="/help" className="help">
                                                {" "}
                                                click here!{" "}
                                            </Link>
                                        </p>
                                    </form>
                                    <button
                                        className="card1_button"
                                        onClick={SubmitForm}
                                    >
                                        Pay
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
            </Modal>
        </div>
    );
};

export default CreateOrder;
