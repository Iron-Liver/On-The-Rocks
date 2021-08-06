import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, makeStyles } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import Summary from './summary';
import PersonalInfo from './personalInfo';
import ProductsAccordion from './productsAccordion';

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

  const history = useHistory();
  const {id} = useParams();
  const classes = useStyles();
  const user = useSelector(state => state.userReducer);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/order/getOrderById/${id}`);
        // if (!user.userDetail || order.data.userId !== user.userDetail.id) {
        //   history.push("/");
        // }
        setOrder(response.data);
      } catch (err) {
        history.push("/");
      }
    })();
  }, [id, history, user]);
  
  return (
    <div>
      {order && (
        <>
          <Grid container className={classes.gridContainer}>
            <PersonalInfo order={order} id={id} />
            <Summary order={order} id={id} />
          </Grid>
          <div className={classes.accordionContainer}>
            <ProductsAccordion order={order} />
          </div>
        </>
      )}
    </div>
  );
}

export default OrderDetail;
