import './MercadopagoHelp.css';
import React from 'react'
import { useParams } from 'react-router-dom'

const MercadopagoHelp = () => {

  const { status } = useParams();

  if(status === "failure") {
    return (
      <div className="mercadopago-help-container">
        {status}
      </div>
    )
  }

  if(status === "pending") {
    return (
      <div className="mercadopago-help-container">
        {status}
      </div>
    )
  }
}

export default MercadopagoHelp
