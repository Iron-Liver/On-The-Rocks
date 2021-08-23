import React from 'react';
import axios from 'axios';
import './order.css';
import { Avatar, Menu, MenuItem, IconButton } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import { MoreVert } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import CustomButton from '../../Button/CustomButton';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);


const Order = ({ order, handleSubmit }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
    <>
    {order && 
      <div className="user-order-container">
        <div className="user-order-inner">
          <div className="user-order-info">
            <div className="user-order-img-container">
              <Swiper
                pagination={order.order_products.length > 1}
                mousewheel={true} 
                keyboard={true}
                style={{ height: "100%", display: "flex"}}
              >
                {order.order_products.map(({ product }) => 
                  <SwiperSlide 
                    key={Math.random() * 3}
                    style={{ textAlign: "center"}}
                  >
                    <img 
                      src={product.image} 
                      alt={product.name}
                      draggable={false}
                      className="user-order-img"
                      width="100px"
                    />
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
            <div className="user-order-text-container">
              <div className="user-order-header">
                <h4 className="user-order-text-item user-order-grow">Order #{order.id}</h4>
                <div className="user-order-actions-responsive">
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
                </div>
              </div>
              <h4 className="user-order-text-item user-order-status">Status: {order.status}</h4>
              <h4 className="user-order-text-item">{`${order.firstName} ${order.lastName}`}</h4>
              <h4 className="user-order-text-item">{`${order.address}, ${order.city}`}</h4>
              <div className="user-order-products-responsive user-order-grow">
                <AvatarGroup max={4}>
                  {order.order_products.map(({product}) => 
                    <Avatar 
                      style={{ 
                        width: "70px", 
                        height: "70px", 
                        border: "1px solid #d3d3d3bb"
                      }} 
                      alt={product.name} 
                      src={product.image} 
                      key={Math.random()}
                    />
                  )}
                </AvatarGroup>
              </div>
              <h4 className="user-order-text-item">Total: $ {order.total}</h4>
            </div>
          </div>
          <div className="user-order-actions">
            <Link 
              to={`/order/${order.id}`}
              style={{ textDecoration: "none", color: "black" }}
              draggable={false}
            >
              <CustomButton
                width="135px"
              >
                ORDER DETAILS
              </CustomButton>
            </Link>
            <CustomButton
              width="135px"
              onClick={handleRemove}
            >
              REMOVE ORDER
            </CustomButton>
          </div>
        </div>
      </div>}
    </>
  );
}

export default Order
