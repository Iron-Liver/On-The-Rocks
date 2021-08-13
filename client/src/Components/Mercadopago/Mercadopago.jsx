import React, { useState, useEffect } from 'react';
import Checkout from './Checkout';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MercadoPago = () => {
  const [data, setData] = useState("")

  const { orderId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const { data: response } = await axios.get(`/mercadopago/${orderId}`);
        setData(response)
      } catch (err) {
        console.error(err);
      }
    })() 
  },[orderId]);

  const products = [{
    title: "Bombay Sapphire 47% London Dry Gin 750mL", 
    quantity: 1, 
    price: 1
  }];

  return (
    <div>
      { 
        !data
          ? <p>Aguarde un momento....</p> 
          : <Checkout products={products} data={data}/>
      }
    </div>
  );
}

export default MercadoPago
