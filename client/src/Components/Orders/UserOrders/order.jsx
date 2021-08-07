import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Box, Button, Hidden, Link } from "@material-ui/core"; 
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  orderContainer: {
    width: "98%",
    margin: "10px"
  },
  root: {
    display: "flex",
    height: "250px"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
  },
  content: {
    flex: "1 0 auto",
  },
  imgContainer: {
    padding: "20px"
  },
  cover: {
    objectFit: "fill",
    width: "150px"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  buttons: {
    marginRight: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  moreIcon: {
    marginRight: "5px"
  }
}));

const Order = ({ order, userId, handleSubmit }) => {
  const classes = useStyles();

  const handleRemove = async (e) => {
    let doubleCheck = window.confirm(
      "This action is irreversible, are you sure to continue?"
    );
    if (doubleCheck) {
      const response = await axios.post(`/order/deleteOrder`, {
        orderId: order.id,
      });
      if (response.status !== 200) {
        return window.alert("An error occurred while removing the order");
      }
      handleSubmit(e);
    }
  };

  return (
    <div className={classes.orderContainer}>
      <Card className={classes.root}>
        <Box className={classes.imgContainer}>
          <img
            className={classes.cover}
            src={order.order_products[0].product.image}
            alt="orderproduct"
          />
        </Box>
        <Box component="div" className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h6" variant="h6">
              Order #{order.id}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Full name: {`${order.firstName} ${order.lastName}`}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Date: {order.createdAt.split("T")[0]}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Address
            </Typography>
          </CardContent>
        </Box>
        <Hidden xsDown>
          <Box m={1} className={classes.buttons}>
            <Button variant="contained" color="primary" onClick={handleRemove}>
              Delete Order
            </Button>
            <Link href={`/order/${order.id}`}>
              <Button variant="contained" color="primary">
                Order Details
              </Button>
            </Link>
          </Box>
        </Hidden>
        <Hidden smUp>
          <Box className={classes.moreIcon}>
            <IconButton edge="end" color="inherit" aria-label="menu">
              <MoreIcon />
            </IconButton>
          </Box>
        </Hidden>
      </Card>
    </div>
  );
}

export default Order
