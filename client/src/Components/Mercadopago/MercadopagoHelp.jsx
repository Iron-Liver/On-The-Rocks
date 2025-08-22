import './MercadopagoHelp.css';
import React from 'react'
import { useParams, Link } from 'react-router-dom'



const MercadopagoHelp = () => {

  const { status } = useParams();

  if(status === "failure") {
    return (
      <div className="mercadopago-help-container">
         <div style={{border:'1px solid gray', padding:'30px', borderRadius:'10px'}}>

          <h3>We were unable to process your payment.
              Try by choosing another card or payment method.
          </h3>
          <h4> Sorry for the inconvenience ! </h4>
          <Link to="/" style={{textDecoration:'none'}}> Login </Link>

          </div>
      </div>
    )
  }

  if(status === "pending") {
    return (     
        (
      <div className="mercadopago-help-container">
        <div style={{border:'1px solid gray', padding:'30px', borderRadius:'10px'}}>

        <h3>Don't worry, we will let you know by email within 2 business days if you have been credited or if we need more information.</h3>
        <h4> Sorry for the inconvenience ! </h4>
        <Link to="/" style={{textDecoration:'none'}}> Login </Link>

        </div>
      </div>
        ) 
    )
  }
}

export default MercadopagoHelp
