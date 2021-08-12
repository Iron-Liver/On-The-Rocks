import React from 'react'

import { useState } from 'react';
import {makeStyles, Button, Modal } from '@material-ui/core'
import { useForm, Form } from './useForm'

import { Link } from 'react-router-dom';
import './CreateOrder.css'

let initialForm = {
  firstName: '',
  lastName: '',
  phone: '',
  address: '',
  city: '',
  zipCode: '',
  paymentMethod: ''   
}

const validate = (state, name, errors) => {
  const newErrors = {...errors};
  
  if (name === "firstName" && !state.firstName){
    newErrors.firstName = "FirstName is required.";
  }
  if (name === "lastName" && !state.lastName){
    newErrors.lastName = "LastName is required."   
  }
  if (name === "address" && !state.address){
    newErrors.address = "Adress Date is required.";   
  } 
  if (name === "city" && !state.city){
    newErrors.city = "City is required.";   
  }
  if (name === "phone" && !state.phone){
    newErrors.phone = "Phone is required.";
  }
  if (name === "zipCode" && !state.ZipCode){
    newErrors.zipCode = "ZipCode is required.";   
  }  
  return newErrors;
};

const useStyle = makeStyles(theme =>({
  modalForm: {
    position:"absolute",
    width: 350,
    backgroundColor: "white",
    borderRadius: '10px',
    boxShadow: theme.shadows[5],
    top:"50%",
    left:"50%",
    transform:"translate(-50%, -50%)"
  },
  gridContainer : {
    width:"100%",
    dispaly: 'flex',
    margin: '0 auto',
    justifyContent: 'center',
    padding: '1px'
  },
  buttons: {
    margin: '25px ',
    '&:hover' :{
      backgroundColor:'gray',
      boxShadow: '1px 1px 4px 1px gray'
    }
  },
  icon: {
    height: '35px',
    width: '30px'
  },
  inputError: {
    color: 'red'
  },
  clear: {
    fontSize:"35px"
  },
  clearContainer: {
    height:"22px"
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent:'center',
    padding: '15px',
  }
  
}))


const CreateOrder = () => {
  const [count, setCount] = useState(1)
  const [modal, setModal] = useState(false);

  const openCloseModal = () => {
    setModal(!modal);
    setErrors({})
    setState(initialForm);
    setCount(1);
  }

  const {
    state,
    setState,
    errors,
    setErrors,
    handleInputChange,
  }=useForm({initialForm, validate});
      
    return ( 
      <div>


        <Button color="primary" variant="outlined" onClick={openCloseModal}> Pay </Button>
        <Modal
        closeAfterTransition
        open={modal}
        onClose={openCloseModal}
        >
          
          <div style={{display:'flex', justifyContent:'center',marginTop:'40px', width:'100%', flexGrow:'1'}}>   
          { count === 1 ? (
              <div className="Full_card">
              <div className="container">
               <div className="card">

                 <h1 className="card_title">Personal Details  <i class="fas fa-address-book"></i></h1>
                 <p className="card_title-info">Step 1: Basic info</p>
                 <form className="card_form">
                   <div className="input">
                     <input type="text" className="input_field" value={state.firstName} required />
                     <label autoComplete="off" className="input_label">First Name - <i class="fas fa-user"></i></label>
                   </div>
                   <div class="input">
                     <input autocomplete="off" type="text" value={state.lastName} className="input_field" required />
                     <label type="text" className="input_label">Second Name - <i class="fas fa-user-check"></i></label>
                   </div>
                   <div class="input">
                     <input type="text" className="input_field" required />
                     <label autoComplete="off" className="input_label">Phone Number - <i class="fas fa-mobile-alt"></i> </label>
                     <span className="input_eye">
                     </span>
                   </div>
                   <div className="btn_cont1">
                   <button className="card_button" style={{width:"46%"}} onClick={() => setCount(count + 1)}>Next</button>
                   </div>
                   <p className="p_color">Need help? <Link to="/help" className="help"> click here! </Link></p>
                 </form>

                 </div>
                </div>
           </div>
          ) : null}

          { count === 2 ? (
             <div className="Full_card">
             <div className="container">
              <div className="card">
                <h1 className="card_title">Personal Details <i class="fas fa-thumbtack"></i></h1>
                <p className="card_title-info">Step 2: Locate </p>
                <form className="card_form">
                  <div className="input">
                    <input type="text" className="input_field" required />
                    
                    <label autoComplete="off" className="input_label">Address - {<i class="fas fa-address-card"></i>}</label>
                  </div>
                  <div class="input">
                    <input autocomplete="off" type="text" className="input_field" required />
                    <label type="text" className="input_label">City - <i class="fas fa-location-arrow"></i></label>
                  </div>
                  <div class="input">
                    <input type="text" className="input_field" required />
                    <label autoComplete="off" className="input_label">Zip Code - <i class="fas fa-map-marker-alt"></i></label>
                    <span className="input_eye">
                    </span>
                  </div>
                  <div className="btn_group">
                  <button className="card_button" onClick={() => setCount(count - 1 )}>Back</button>
                  <div className="divis"></div>
                  <button className="card_button">Next</button>
                  </div>
                     <p>Need help? <Link to="/help" className="help"> click here! </Link></p>
                </form>
                </div>
               </div>
          </div>
          ) : null}

          { count === 3 ? (
              <div></div>
          ) : null}
          </div>
        </Modal>
      </div>
  )
}

export default CreateOrder



 
                  //  <div class="center">
                  //  <p className="pe">Socials :</p>
                  //     <div id="social-test">
                  //     <ul class="social">
                  //       <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                  //       <li><i class="fa fa-twitter" aria-hidden="true"></i>
                  //     </li>
                  //       <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
                  //       <li><i class="fa fa-github" aria-hidden="true"></i>
                  //     </li>
                  //     </ul>
                  //     </div>
                  //   </div>