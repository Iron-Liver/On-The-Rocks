import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, makeStyles, Hidden } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex"
  },
  detailsContainer: {
    minWidth: "60%",
    width: "60%"
  },
  imgContainer: {
    padding: "0"
  },
  img: {
    border: "1px solid black",
    width: "100%",
    objectFit: "fill"
  }
});

const OrderDetail = ({ orderId }) => {
  const [order, setOrder] = useState({});
  const [error, setError] = useState(false)

  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        const order = await axios.get(`/order/getOrderById/${orderId}`);
        setOrder(order.data);
      } catch (err) {
        setError(true);
      }
    })();
  }, [orderId]);
  
  return (
    <Container className={classes.root}>
      <Grid container className={classes.detailsContainer}>
        <Grid item xs={12}>
          <Typography variant="h3" color="initial">
            Order details
          </Typography>
        </Grid>
        <Hidden smUp>
          <img
            src="https://picsum.photos/800/800"
            alt="testimage"
            className={classes.img}
          />
        </Hidden>
        <Grid item xs={12}>
          <Typography variant="h6" color="initial">
            First Name: {order.firstName}
          </Typography>
          <Typography variant="h6" color="initial">
            Last Name: {order.lastName}
          </Typography>
          <Typography variant="h6" color="initial">
            State: {order.state}
          </Typography>
          <Typography variant="h6" color="initial">
            Address: {order.address}
          </Typography>
          <Typography variant="h6" color="initial">
            City: {order.city}
          </Typography>
          <Typography variant="h6" color="initial">
            Payment method: {order.paymentMethod}
          </Typography>
          <Typography variant="h6" color="initial">
            Zip code: {order.zipCode}
          </Typography>
          <Typography variant="h6" color="initial">
            Total: {order.total}
          </Typography>
          <Typography variant="h6" color="initial">
            Order date: {order.createdAt}
          </Typography>
          <Typography variant="subtitle2" color="initial">
            Order #{order.id}
          </Typography>
        </Grid>
      </Grid>
      <Hidden xsDown>
        <Container className={classes.imgContainer}>
          <img
            src="https://picsum.photos/800/800"
            alt="testimage"
            className={classes.img}
          />
        </Container>
      </Hidden>
    </Container>
  );
}

export default OrderDetail;
