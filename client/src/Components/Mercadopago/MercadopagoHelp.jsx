import './MercadopagoHelp.css';
import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

const MercadopagoHelp = () => {

  const { status } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const a = query.entries();
  for(let i of a) {
    console.log(i)
  }

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
