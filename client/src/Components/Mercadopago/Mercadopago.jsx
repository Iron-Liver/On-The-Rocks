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
    units: 3, 
    price: 100, 
    id: 2
  },{
    units: 2, 
    price: 50, 
    id: 4
  },{
    units: 4, 
    price: 35, 
    id: 3
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
