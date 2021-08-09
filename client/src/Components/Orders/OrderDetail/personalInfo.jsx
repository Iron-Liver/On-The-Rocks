import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Grid, Paper, Typography, makeStyles, Button, Menu, MenuItem, Box } from "@material-ui/core";
import { Delete, Info, Edit, Email } from "@material-ui/icons";

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
    background: "#e9ecef",
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
    padding: "20px 20px 0px", 
    display: "flex" 
  },
  typoGrow: {
    flexGrow: "1"
  },
  actionsContainer: {
    display: "flex", 
    justifyContent: "space-around"
  }
}));

const PersonalInfo = ({ order, id, setOrderStatus, orderStatus }) => {
  const classes = useStyles();
  const history = useHistory();

  const localProfile = JSON.parse(localStorage.getItem("profile"));

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
              <img
                src={order.order_products 
                  ? order.order_products[0]?.product?.image 
                    ? order.order_products[0].product.image 
                    : "https://i.stack.imgur.com/y9DpT.jpg" 
                  : "https://i.stack.imgur.com/y9DpT.jpg"
                }
                alt="order_product"
                width="200px"
              />
            </Box>
            <Box className={classes.personalItem}>
              <Typography className={classes.typoGrow}>
                Order#{order.id}
              </Typography>
            </Box>
            <Box className={classes.personalItem}>
              <Typography className={classes.typoGrow}>First name:</Typography>
              <Typography>{order.firstName}</Typography>
            </Box>
            <Box className={classes.personalItem}>
              <Typography className={classes.typoGrow}>Last name:</Typography>
              <Typography>{order.lastName}</Typography>
            </Box>
            <Box className={classes.personalItem}>
              <Typography className={classes.typoGrow}>Address:</Typography>
              <Typography>{order.address}</Typography>
            </Box>
            <Box className={classes.personalItem}>
              <Typography className={classes.typoGrow}>City:</Typography>
              <Typography>{order.city}</Typography>
            </Box>
            <Box className={classes.personalItem}>
              <Typography className={classes.typoGrow}>Zip code:</Typography>
              <Typography>{order.zipCode}</Typography>
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
                    disabled={orderStatus === "created"}
                    onClick={handleStatusClick}
                    className={classes.menuItem}
                  >
                    Created
                  </MenuItem>
                  <MenuItem
                    id="processing"
                    disabled={orderStatus === "processing"}
                    onClick={handleStatusClick}
                    className={classes.menuItem}
                  >
                    Processing
                  </MenuItem>
                  <MenuItem
                    id="completed"
                    disabled={orderStatus === "completed"}
                    onClick={handleStatusClick}
                    className={classes.menuItem}
                  >
                    Completed
                  </MenuItem>
                  <MenuItem
                    id="cancelled"
                    disabled={orderStatus === "cancelled"}
                    onClick={handleStatusClick}
                    className={classes.menuItem}
                  >
                    Cancelled
                  </MenuItem>
                </Menu>
                <Button variant="text" color="default" startIcon={<Email />}>
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
                <Button variant="text" color="default" startIcon={<Info />}>
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
