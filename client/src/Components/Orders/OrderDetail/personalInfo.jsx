import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Grid, Paper, makeStyles, Button, Menu, MenuItem, Box } from "@material-ui/core";
import { Delete, Info, Edit, Email } from "@material-ui/icons";
import jwt from 'jsonwebtoken'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard,Autoplay]);

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    maxHeight: "max-content",
    minHeight: "100%",
    height: "100%",
    marginBottom: "30px",
  },
  paperInfo: {
    height: "max-content",
    width: "95%",
    margin: "auto",
    background: "#372c2e",
    color: "whitesmoke"
  },
  paperPosition: {
    width: "100%",
    height: "100%",
    margin: "20px 0",
  },
  imgContainer: {
    margin: "0 auto",
    padding: "20px",
    display: "flex",
    width: "90%",
    justifyContent: "center",
    background: "white",
  },
  personalItem: { 
    padding: "5px 20px 0px", 
    display: "flex" 
  },
  typoGrow: {
    flexGrow: "1",
    fontWeight: "300"
  },
  actionsContainer: {
    display: "flex", 
    justifyContent: "space-around",
    // eslint-disable-next-line
    ['& button']: {
      color: "whitesmoke"
    },
    // eslint-disable-next-line
    ['& button:disabled']: {
      color: "#ffffff33"
    }
  }
}));

const PersonalInfo = ({ order, id, setOrderStatus, orderStatus }) => {
  const classes = useStyles();
  const history = useHistory();

  const localProfile = JSON.parse(localStorage.getItem('token')) ? 
  jwt.verify(JSON.parse(localStorage.getItem('token')), 
  process.env.REACT_APP_SECRET_KEY) : null;

  const [anchorEl, setAnchorEl] = useState(null);

  const handleRemove = async () => {
    let doubleCheck = window.confirm(
      "This action is irreversible, are you sure to continue?"
    );
    if (doubleCheck) {
      const response = await axios.post(`/order/deleteOrder`, {
        orderId: id,
      });
      if (response.status !== 200) {
        return window.alert("An error occurred while removing the order");
      }
      history.push("/");
    }
  };

  useEffect(() => {
    setOrderStatus(order.status);
  }, [order.status, setOrderStatus]);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStatusClick = async (e) => {
    setAnchorEl(null);
    setOrderStatus(e.target.id);
    await axios.post("/order/updateOrderStatus", {
      orderId: order.id,
      newStatus: e.target.id,
    });
  };

  return (
    <Grid item xs={12} sm={5} md={4}>
      <Box className={classes.paperContainer}>
        <Paper className={classes.paperInfo} square>
          <Box className={classes.paperPosition}>
            <Box className={classes.imgContainer}>
              <Swiper
                pagination={true}
                navigation={true}
              >
                {
                  order.order_products && 
                  order.order_products.map(product => (
                    <SwiperSlide style={{
                      textAlign: "center"
                      }}>
                      {
                        product.product?.image ? (
                          <img
                            src={product.product.image}
                            alt="order_product"
                            width="200px"
                          />
                        ) : (
                          <img
                            src="https://i.stack.imgur.com/y9DpT.jpg" 
                            alt="order_product"
                            width="200px"
                          />
                        )
                      }
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </Box>
            <Box className={classes.personalItem}>
              <h2 className={classes.typoGrow}>
                Order #{order.id}
              </h2>
            </Box>
            <Box className={classes.personalItem}>
              <h4 className={classes.typoGrow}>FIRST NAME:</h4>
              <h4>{order.firstName}</h4>
            </Box>
            <Box className={classes.personalItem}>
              <h4 className={classes.typoGrow}>LAST NAME:</h4>
              <h4>{order.lastName}</h4>
            </Box>
            <Box className={classes.personalItem}>
              <h4 className={classes.typoGrow}>ADDRESS:</h4>
              <h4>{order.address}</h4>
            </Box>
            <Box className={classes.personalItem}>
              <h4 className={classes.typoGrow}>CITY:</h4>
              <h4>{order.city}</h4>
            </Box>
            <Box className={classes.personalItem}>
              <h4 className={classes.typoGrow}>ZIP CODE:</h4>
              <h4>{order.zipCode}</h4>
            </Box>
            <br />
            {localProfile.isAdmin ? (
              <Box className={classes.actionsContainer}>
                <Button
                  aria-controls="status-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                  startIcon={<Edit />}
                  disableElevation
                  disabled={order.status === "pending"}
                >
                  SET STATUS
                </Button>
                <Menu
                  id="status-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  className={classes.menu}
                >
                  <MenuItem
                    id="created"
                    disabled={order.status === "created" || order.status === "pending"}
                    onClick={handleStatusClick}
                    className={classes.menuItem}
                  >
                    Created
                  </MenuItem>
                  <MenuItem
                    id="processing"
                    disabled={order.status === "processing" || order.status === "pending"}
                    onClick={handleStatusClick}
                    className={classes.menuItem}
                  >
                    Processing
                  </MenuItem>
                  <MenuItem
                    id="completed"
                    disabled={order.status === "completed" || order.status === "pending"}
                    onClick={handleStatusClick}
                    className={classes.menuItem}
                  >
                    Completed
                  </MenuItem>
                  <MenuItem
                    id="cancelled"
                    disabled={order.status === "cancelled" || order.status === "pending"}
                    onClick={handleStatusClick}
                    className={classes.menuItem}
                  >
                    Cancelled
                  </MenuItem>
                </Menu>
                <Button 
                  variant="text" 
                  color="default" 
                  startIcon={<Email />}
                  disabled
                >
                  Contact user
                </Button>
              </Box>
            ) : (
              <Box className={classes.actionsContainer}>
                <Button
                  color="default"
                  variant="text"
                  startIcon={<Delete />}
                  onClick={handleRemove}
                >
                  Remove order
                </Button>
                <Button 
                  variant="text" 
                  color="default" 
                  startIcon={<Info />}
                  disabled
                >
                  Get help
                </Button>
              </Box>
            )}
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
}

export default PersonalInfo;
