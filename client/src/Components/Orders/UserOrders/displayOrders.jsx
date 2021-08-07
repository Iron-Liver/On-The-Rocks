import React, { useState, useEffect } from 'react'
import Order from './order';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const DisplayOrders = () => {
  const [orders, setOrders] = useState({});

  const id = useParams('id')
  const history = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/order/getOrdersByUser/${id}`);
        setOrders(response.data);
      } catch (error) {
        history.push("/");
      }
    })();
  }, [history, id]);

  return (
    <div>
      
    </div>
  )
}

export default DisplayOrders
