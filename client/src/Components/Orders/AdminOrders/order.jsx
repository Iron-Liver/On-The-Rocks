import React, { useEffect, useState } from 'react';
import { Paper, makeStyles, Box, Typography, Button, Link, Menu, MenuItem, Hidden } from '@material-ui/core';
import { Add, Edit } from '@material-ui/icons';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  orderPaper: {
    width: "98%",
    margin: "10px 0",
    backgroundColor: "#e9ecef",
    "&:hover": {
      backgroundColor: "#ced4da",
      transition: "background-color 0.3s",
    },
  },
  orderBox: {
    display: "flex",
    width: "100%",
    margin: "0",
    padding: "5px",
  },
  orderInfo: {
    flexGrow: "1",
    minWidth: "max-content",
  },
  fieldContainer: {
    display: "flex",
    alignItems: "baseline"
  },
  orderActions: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "max-content",
    width: "210px",
    backgroundColor: "#ced4da",
    padding: "10px",
    borderRadius: "3%",
  },
  orderActionsResponsive: {
    display: "flex",
    flexDirection: "column",
    padding: "5px",
  },
  division: {
    width: "95%",
    margin: "0 auto",
    height: "2px",
    background: "#ced4da",
  },
  infoValue: {
    marginLeft: "3px"
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  moreDetails: {
    paddingTop: "2px",
  },
  menu: {
    color: "#e9ecef",
  },
  menuItem: {
    "&:hover": {
      backgroundColor: "#ced4da",
    },
  },
}));

const Order = ({ order, setOrderStatus }) => {
  const classes = useStyles();
  
  const [ anchorEl, setAnchorEl ] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStatusClick = async (e) => {
    setAnchorEl(null);
    setOrderStatus(e.target.id, order.id);
    await axios.post('/order/updateOrderStatus', {
      orderId: order.id,
      newStatus: e.target.id
    });
  };

  return (
    <>
      {order &&
        <Paper className={classes.orderPaper}>
          <Box className={classes.orderBox}>
            <Box className={classes.orderInfo}>
              <div>
                <Typography variant="overline">
                  Order #{order.id} | Status:{" "}
                  <span
                    style={{
                      color:
                      order.status === "completed"
                          ? "#2a5000"
                          : order.status === "cancelled"
                          ? "#751d0c"
                          : order.status === "processing"
                          ? "#7a6200"
                          : "#231f58",
                    }}
                  >
                    {order.status} ⬤
                  </span>
                </Typography>
              </div>
              <Hidden smUp>
                <div className={classes.divider} />
              </Hidden>
              <div className={classes.fieldContainer}>
                <Typography variant="overline">First name:</Typography>
                <Typography variant="body2" className={classes.infoValue}>
                  {order.firstName}
                </Typography>
              </div>
              <div className={classes.fieldContainer}>
                <Typography variant="overline">Last name:</Typography>
                <Typography variant="body2" className={classes.infoValue}>
                  {order.lastName}
                </Typography>
              </div>
              <div className={classes.fieldContainer}>
                <Typography variant="overline">Address:</Typography>
                <Typography variant="body2" className={classes.infoValue}>
                  {order.address}
                </Typography>
              </div>
              <div className={classes.fieldContainer}>
                <Typography variant="overline">City:</Typography>
                <Typography variant="body2" className={classes.infoValue}>
                  {order.city}
                </Typography>
              </div>
              <div className={classes.fieldContainer}>
                <Typography variant="overline">Total:</Typography>
                <Typography variant="body2" className={classes.infoValue}>
                  $ {order.total}
                </Typography>
              </div>
            </Box>
            <Hidden xsDown>
              <Box className={classes.orderActions}>
                <Link
                  href={`/order/${order.id}`}
                  className={classes.orderButton}
                >
                  <Button startIcon={<Add />} variant="contained" color="primary" disableElevation>
                    <span className={classes.moreDetails}>MORE DETAILS</span>
                  </Button>
                </Link>
                <Typography variant="overline" className={classes.infoField}>
                  User: {order.user.name}
                </Typography>
                <Typography variant="overline" className={classes.infoField}>
                  Username: {order.user.username}
                </Typography>
                <Typography
                  variant="overline"
                  className={classes.infoField}
                  gutterBottom
                >
                  Date: {order.createdAt.split("T")[0]}
                </Typography>
                <Button
                  aria-controls="status-menu"
                  aria-haspopup="true"
                  variant="contained"
                  onClick={handleClick}
                  startIcon={<Edit />}
                  color="primary"
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
                    disabled={order.status === "created"}
                    onClick={handleStatusClick}
                    className={classes.menuItem}
                  >
                    Created
                  </MenuItem>
                  <MenuItem
                    id="processing"
                    disabled={order.status === "processing"}
                    onClick={handleStatusClick}
                    className={classes.menuItem}
                  >
                    Processing
                  </MenuItem>
                  <MenuItem
                    id="completed"
                    disabled={order.status === "completed"}
                    onClick={handleStatusClick}
                    className={classes.menuItem}
                  >
                    Completed
                  </MenuItem>
                  <MenuItem
                    id="cancelled"
                    disabled={order.status === "cancelled"}
                    onClick={handleStatusClick}
                    className={classes.menuItem}
                  >
                    Cancelled
                  </MenuItem>
                </Menu>
              </Box>
            </Hidden>
          </Box>
          <Box>
            <Hidden smUp>
              <div className={classes.divider} />
              <Box className={classes.orderActionsResponsive}>
                <Typography variant="overline" className={classes.infoField}>
                  User: {order.user.name}
                </Typography>
                <Typography variant="overline" className={classes.infoField}>
                  Username: {order.user.username}
                </Typography>
                <Typography
                  variant="overline"
                  className={classes.infoField}
                  gutterBottom
                >
                  Date: {order.createdAt.split("T")[0]}
                </Typography>
              </Box>
              <div className={classes.buttonsContainer}>
                <Link
                  href={`/order/${order.id}`}
                  className={classes.orderButton}
                >
                  <Button startIcon={<Add />} variant="contained" color="primary" disableElevation>
                    <span className={classes.moreDetails}>MORE DETAILS</span>
                  </Button>
                </Link>
                <Button
                  aria-controls="status-menu"
                  aria-haspopup="true"
                  variant="contained"
                  onClick={handleClick}
                  startIcon={<Edit />}
                  disableElevation
                  color="primary"
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
                    disabled={order.status === "created"}
                    onClick={handleStatusClick}
                    className={classes.menuItem}
                  >
                    Created
                  </MenuItem>
                  <MenuItem
                    id="processing"
                    disabled={order.status === "processing"}
                    onClick={handleStatusClick}
                    className={classes.menuItem}
                  >
                    Processing
                  </MenuItem>
                  <MenuItem
                    id="completed"
                    disabled={order.status === "completed"}
                    onClick={handleStatusClick}
                    className={classes.menuItem}
                  >
                    Completed
                  </MenuItem>
                  <MenuItem
                    id="cancelled"
                    disabled={order.status === "cancelled"}
                    onClick={handleStatusClick}
                    className={classes.menuItem}
                  >
                    Cancelled
                  </MenuItem>
                </Menu>
              </div>
              <br />
            </Hidden>
          </Box>
        </Paper>}
    </>
  );
}

export default Order
