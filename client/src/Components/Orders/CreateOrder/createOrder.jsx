import React from 'react';
import { useState } from 'react';
import { Button, Modal } from '@material-ui/core';
import { useForm } from './useForm';
import { Link, useHistory } from 'react-router-dom';
import { userSchema1, userSchema2 } from './ValidationOrder'
import './CreateOrder.css'
import axios from 'axios'

let initialForm1 = {
  firstName: '',
  lastName: '',
  phone: '',  
}
let initialForm2 = {    
  address: '',
  city: '',
  zipCode: '',
  paymentMethod: 'mercadopago',
}


const CreateOrder = () => {
  const [count, setCount] = useState(1);
  const [modal, setModal] = useState(false);

  const history = useHistory();

  const openCloseModal = () => {
    setModal(!modal);
    setState1({});
    setState2({});
    setCount(1);
  }

  const nextPage1 = async (e) => {
    e.preventDefault()
    const isValid1 = await userSchema1.isValid(state1);
    if(isValid1) setCount(count + 1)
  }

  const nextPage2 = async (e) => {
    e.preventDefault()
    const isValid2 = await userSchema2.isValid(state2);
    if(isValid2) setCount(count + 1);
  }

  const SubmitForm = async () => {
    const order = {
        id: 9,
        firstName: 'agustin',
        lastName: 'nosenosneso',
        phone: '123214',  
        address: 'nosenosneos',
        city: 'nosneose',
        zipCode: 'nosenos',
        paymentMethod: 'mercadopago',
        total: 300,
      cart: [
      {
        units: 1, 
        price: 1, 
        id: 2
      },
      // {
      //   units: 2, 
      //   price: 50, 
      //   id: 4
      // },{
      //   units: 4, 
      //   price: 35, 
      //   id: 3
      // }
    ]
    }
    try {
      console.log(order);
      const { data } = await axios.post('/order/addOrder', order);
      console.log(data)
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
  }=useForm({initialForm2, initialForm1});
      
    return ( 
      <div>

{/*         
<div class="center">
                   <p className="pe">Socials :</p>
                      <div id="social-test">
                      <ul class="social">
                        <li><i class="fa fa-facebook" aria-hidden="true"></i></li>
                        <li><i class="fa fa-twitter" aria-hidden="true"></i>
                      </li>
                        <li><i class="fa fa-instagram" aria-hidden="true"></i></li>
                        <li><i class="fa fa-github" aria-hidden="true"></i>
                      </li>
                      </ul>
                      </div>
                    </div> */}

        <Button onClick={SubmitForm}> pagar </Button>
       <Button color="primary" variant="outlined" onClick={openCloseModal}> Pay </Button>
        <Modal
        closeAfterTransition
        open={modal}
        onClose={openCloseModal}
        >
          
          <div style={{display:'flex', justifyContent:'center',marginTop:'40px', width:'100%', flexGrow:'1'}}>   
          <form >
          { count === 1 ? (
                     <div className="Full_card">
                     <div className="container">
                       <div className="exit">
                       <button onClick={openCloseModal}> X </button>
                       </div>
                      <div className="card">
                        <h1 className="card_title">Personal Details  <i class="fas fa-address-book"></i></h1>
                        <div className="subtitle_form">
                        <p className="card_title-info">Step 1: Basic info</p>          
                        </div>
                        <form className="card_form">
                          <div className="input">
                            <input type="text"   name="firstName" className={state1.firstName? 'input_field' : 'input_fieldw'} onChange={handleInputChange1} value={state1.firstName} required  />
                            <label id="firstname" className="input_label" label='First Name'>First Name - <i class="fas fa-user"></i> {state1.firstName? <i class="fas fa-check" style={{color:'green'}}></i> : <i style={{color:'red'}} class="fas fa-times"></i> } </label>
                          </div>
                          <div class="input">
                            <input  name="lastName" type="text" value={state1.lastName} onChange={handleInputChange1} className={state1.lastName ? 'input_field' : 'input_fieldw'} required />
                            <label type="text" className="input_label">Last Name - <i class="fas fa-user-check"></i> {state1.lastName? <i class="fas fa-check" style={{color:'green'}}></i> : <i style={{color:'red'}} class="fas fa-times"></i> }</label>
                          </div>
                          <div class="input">
                            <input type="text" className={state1.phone ? 'input_field' : 'input_fieldw'} name="phone" value={state1.phone} onChange={handleInputChange1} required />
                            <label className="input_label">Phone Number - <i class="fas fa-mobile-alt"></i> {state1.phone? <i class="fas fa-check" style={{color:'green'}}></i> : <i style={{color:'red'}} class="fas fa-times"></i> } </label>
                          </div>
                          <div className="btn_cont1">
                          <button className="card_button" style={{width:"46%"}} onClick={nextPage1}>Next</button>
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
             <div className="exit">
                <button onClick={openCloseModal}> X </button>
                </div>
              <div className="card">
                <h1 className="card_title">Personal Details <i class="fas fa-thumbtack"></i></h1>
                <p className="card_title-info">Step 2: Locate </p>               
                <form className="card_form">
                  <div className="input">
                    <input type="text" className={state2.address ? 'input_field' : 'input_fieldw'} name="address" value={state2.address} onChange={handleInputChange2} required />
                    <label className="input_label">Address - {<i class="fas fa-address-card"></i>} {state2.address? <i class="fas fa-check" style={{color:'green'}}></i> : <i style={{color:'red'}} class="fas fa-times"></i> }</label>
                  </div>
                  <div class="input">
                    <input type="text" name="city" value={state2.city} onChange={handleInputChange2} className={state2.city ? 'input_field' : 'input_fieldw'} required />
                    <label type="text" className="input_label">City - <i class="fas fa-location-arrow"></i> {state2.city? <i class="fas fa-check" style={{color:'green'}}></i> : <i style={{color:'red'}} class="fas fa-times"></i> }</label>
                  </div>
                  <div class="input">
                    <input type="text" className={state2.zipCode ? 'input_field' : 'input_fieldw'} name="zipCode" value={state2.zipCode} onChange={handleInputChange2} required />
                    <label className="input_label">Zip Code - <i class="fas fa-map-marker-alt"></i>  {state2.zipCode? <i class="fas fa-check" style={{color:'green'}}></i> : <i style={{color:'red'}} class="fas fa-times"></i> }</label>
                  </div>
                  <div className="btn_group">
                  <button className="card_button" onClick={() => setCount(count - 1)} >Back</button>
                  <div className="divis"></div>
                  <button className="card_button" onClick={nextPage2}>Next</button>
                  </div>
                     <p>Need help? <Link to="/help" className="help"> click here! </Link></p>
                </form>
                </div>
               </div>
          </div>
          ) : null}

          { count === 3 ? (
               <div className="Full_card">
               <div className="container">
               <div className="exit">
                <button onClick={openCloseModal}> X </button>
                </div>
                <div className="card">
                  <h1 className="card_title" style={{marginTop:'20px', marginBottom:'25px'}}>Select payment method</h1>
                  <form className="card_form">
                    {/* <div >
                      <input type="radio" id="mercadopago" className="input_field" checked name="paymentMethod" required />                     
                      <label for="mercadopago">Mercadopago</label>
                    </div> */}
                    <div className="btn_group">
                    </div>
                       <p>Need help? <Link to="/help" className="help"> click here! </Link></p>
                  </form>
                    <button className="card_button" onClick={SubmitForm}>Pay</button>
                  </div>
                 </div>
            </div>  
          ) : null}
          </form>
          </div>
        </Modal>
      </div>
  )
}

export default CreateOrder



 

