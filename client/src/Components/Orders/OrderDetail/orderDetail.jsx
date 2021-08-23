import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, makeStyles } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import Summary from './summary';
import PersonalInfo from './personalInfo';
import ProductsAccordion from './productsAccordion';
import jwt from 'jsonwebtoken';

const useStyles = makeStyles((theme) => ({
  loaderContainer: {
    display: "flex",
    justifyContent: "center"
  },
  accordionContainer: {
    margin: "0 auto",
    width: "99%",
    marginTop: "20px",
  },
  gridContainer: { 
    alignItems: "flex-start"
  }
}));

const OrderDetail = () => {
  const [order, setOrder] = useState({});

  const initialStatus = order.status;

  const [orderStatus, setOrderStatus] = useState(initialStatus);

  const history = useHistory();
  const { id } = useParams();
  const classes = useStyles();
  const user = useSelector(state => state.userReducer);
  
  useEffect(() => {
    (async () => {
      try {
        const localProfile = JSON.parse(localStorage.getItem('token')) ? 
        jwt.verify(JSON.parse(localStorage.getItem('token')), 
        process.env.REACT_APP_SECRET_KEY) : null;

        if(!localProfile) {
          history.push("/");
        }

        const { id: userId , isAdmin } = localProfile;
        const response = await axios.get(`/order/getOrderById/${id}`);
        if (response.data.userId === userId || isAdmin) {
          return setOrder(response.data);
        }
        history.push("/");
      } catch (err) {
        history.push("/");
      }
    })();
  }, [id, history, user]);

  return (
    <div style={{ background: "white", padding: "28px 0"}}>
      {order && (
        <>
          <Grid container className={classes.gridContainer}>
            <PersonalInfo 
              order={order} 
              id={id} 
              setOrderStatus={setOrderStatus} 
              orderStatus={orderStatus}
            />
            <Summary 
              order={order} 
              id={id} 
              orderStatus={orderStatus} 
            />
          </Grid>
          <div className={classes.accordionContainer}>
            <ProductsAccordion 
              order={order} 
            />
          </div>
        </>
      )}
    </div>
  );
}

export default OrderDetail;
