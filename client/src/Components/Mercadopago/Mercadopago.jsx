import React, { useState, useEffect } from 'react';
import CheckoutV2 from './CheckoutV2';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import verifyUser from '../../Utils/verifyUser'
import CircularProgress from '@material-ui/core/CircularProgress';

const MercadoPago = () => {
  const [data, setData] = useState("")
  const [orderInfo, setOrderInfo] = useState({});
  const [stock, setStock] = useState(null);

  const { orderId } = useParams();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const orderStock = await axios.get(`/order/getOrderStock/${orderId}`);

        setStock(orderStock.data.stock);

        const order = axios.get(`/order/getOrderById/${orderId}`);
        const mercadopago = axios.get(`/mercadopago/${orderId}`);
        const [{ 
          data: dataOrder 
        }, {
          data: dataMP 
        }] = await Promise.all([order, mercadopago]);

        const currentUser = verifyUser()

        if(currentUser.id !== dataOrder.userId) {
          history.push("/");
        }

        setOrderInfo(dataOrder);
        setData(dataMP);
      } catch (err) {
        console.error(err);
      }
    })() 
  },[orderId, history]);

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      { 
        !data
          ? <CircularProgress />
          // : <Checkout order={orderInfo} data={data} stock={stock}/>
          : <CheckoutV2 order={orderInfo} data={data} stock={stock}/>
      }
    </div>
  );
}

export default MercadoPago
