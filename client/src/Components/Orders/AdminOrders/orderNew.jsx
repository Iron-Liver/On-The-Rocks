import React, { useState } from 'react';
import axios from 'axios';
import './order.css';
import { Menu, MenuItem, IconButton } from '@mui/material';
import { MoreVert, Edit } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const statusColor = {
  pending: "#262b2fdd",
  created: "#040348dd",
  processing: "#d5b60add",
  completed: "#004400dd",
  cancelled: "#900020dd"
};

const OrderNew = ({ order, handleSubmit, setOrderStatus }) => {
  const [anchorElStatus, setAnchorElStatus] = useState(null);
  const [anchorElMenu, setAnchorElMenu] = useState(null);
  const openStatus = Boolean(anchorElStatus);
  const openMenu = Boolean(anchorElMenu)

  const handleClickStatus = (event) => {
    setAnchorElStatus(event.currentTarget);
  };

  const handleClickMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
  };

  const handleCloseStatus = () => {
    setAnchorElStatus(null);
  };

  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  const handleRemove = async (e) => {
    let doubleCheck = window.confirm(
      "This action is irreversible, are you sure to continue?"
    );
    if (doubleCheck) {
      const response = await axios.post(`/order/deleteOrder`, {
        orderId: order.id,
        force: true
      });
      if (response.status !== 200) {
        return window.alert("An error occurred while removing the order");
      }
      handleSubmit(e);
    }
  };

  const handleStatusClick = async (e) => {
    setAnchorElStatus(null);
    setOrderStatus(e.target.id, order.id);
    await axios.post('/order/updateOrderStatus', {
      orderId: order.id,
      newStatus: e.target.id
    });
  };

  return (
    <>
      {order && 
        <article className="admin-order-container">
          <div className="admin-order-inner">
            <div className="admin-order-info">
              <div className="admin-order-text-container">
                <header className="admin-order-header">
                  <h4 className="admin-order-text-item admin-order-bold">
                    Order #{order.id} | Status: {" "}
                  </h4>
                  <span 
                    id="admin-order-status"
                    style={{ 
                      background: `${statusColor[order.status]}`
                    }}
                    aria-controls="status-menu"
                    aria-haspopup="true"
                    variant="contained"
                    onClick={handleClickStatus}
                    disabled={order.status === "pending"}
                  >
                    {<Edit style={{ width: "15px", marginRight: "4px" }}/>}{order.status}
                  </span>
                  <Menu
                    id="status-menu"
                    anchorEl={anchorElStatus}
                    keepMounted
                    open={openStatus}
                    onClose={handleCloseStatus}
                  >
                    <MenuItem
                      id="created"
                      disabled={order.status === "created" || order.status === "pending"}
                      onClick={handleStatusClick}
                    >
                      Created
                    </MenuItem>
                    <MenuItem
                      id="processing"
                      disabled={order.status === "processing" || order.status === "pending"}
                      onClick={handleStatusClick}
                    >
                      Processing
                    </MenuItem>
                    <MenuItem
                      id="completed"
                      disabled={order.status === "completed" || order.status === "pending"}
                      onClick={handleStatusClick}
                    >
                      Completed
                    </MenuItem>
                    <MenuItem
                      id="cancelled"
                      disabled={order.status === "cancelled" || order.status === "pending"}
                      onClick={handleStatusClick}
                    >
                      Cancelled
                    </MenuItem>
                  </Menu>
                  {/* <div className="admin-order-actions-responsive">
                    <IconButton
                      aria-label="more"
                      aria-controls="long-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
                      style={{ margin: 0, padding: 0 }}
                    >
                      <MoreVert />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={open}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: 40 * 4.5,
                          width: '20ch',
                        },
                      }}
                    >
                      <Link 
                        to={`/order/${order.id}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <MenuItem>
                          Order details
                        </MenuItem>
                      </Link>
                      <MenuItem  
                        onClick={handleRemove}
                      >
                        Remove Order
                      </MenuItem>
                    </Menu>
                  </div> */}
                </header>
                <h4 className="admin-order-text-item">{`${order.firstName} ${order.lastName}`}</h4>
                <h4 className="admin-order-text-item">{`${order.address}, ${order.city}`}</h4>
                <h4 className="admin-order-text-item">User: {order.user.username}</h4>
                <h4 className="admin-order-text-item">Date: {order.date}</h4>
                <h4 className="admin-order-text-item admin-order-bold">Total: $ {order.total}</h4>
              </div>
            </div>
            <div className="admin-order-actions">
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClickMenu}
                style={{ margin: 0, padding: 0 }}
                size="large">
                <MoreVert />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorElMenu}
                keepMounted
                open={openMenu}
                onClose={handleCloseMenu}
                PaperProps={{
                  style: {
                    maxHeight: 40 * 4.5,
                    width: '20ch',
                  },
                }}
              >
                <Link 
                  to={`/order/${order.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <MenuItem>
                    Order details
                  </MenuItem>
                </Link>
                <MenuItem  
                  onClick={handleRemove}
                >
                  Remove Order
                </MenuItem>
              </Menu>
            </div>
          </div>
        </article>}
    </>
  );
}

export default OrderNew