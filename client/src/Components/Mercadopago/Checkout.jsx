import React, { useEffect } from 'react';
import './Checkout.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Hidden } from "@mui/material"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard
} from 'swiper/modules';
import ProductSlide from './ProductSlide';
import OrderInfo from './OrderInfo';
import ProductSlideResponsive from './ProductSlideResponsive';

const Checkout = ({ order, data, stock }) => {

  useEffect(() => {
    if(stock) {
      const script = document.createElement('script');
    
      const attr_data_preference = document.createAttribute('data-preference-id');

      attr_data_preference.value = data.id
  
      script.src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";  
      script.setAttributeNode(attr_data_preference)  
    
      document.getElementById('form1').appendChild(script);
    }
   },[data, stock])

  return (
    <div className="checkout-wrapper">
      <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "center"}}>
        <div className="order-info-container">
          <OrderInfo order={order}/>
          <div className="payment-button">
            <form id='form1'>
            </form>
            {!stock &&
            <p style={{color: "#d9534f", margin: "3px"}}>
              No stock available, please try again later.
            </p>}
          </div>
        </div>
      </div>
      <div className="productview-wrapper">
        <Hidden mdDown>
          <div className="swiper-wrap">
            <Swiper 
              modules={[Navigation, Mousewheel, Keyboard]}
              navigation={order.order_products.length > 1}
              mousewheel={true} 
              keyboard={true}
            >
              {order.order_products.map(product => 
                <SwiperSlide key={Math.random() * 3}>
                    <ProductSlide product={product} />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </Hidden>
        <Hidden mdUp>
          <h2 style={{textAlign: "center", fontFamily: `"Heebo", sans-serif`}}>PRODUCTS</h2>
          <Swiper
            modules={[Pagination]}
            slidesPerView={2} 
            spaceBetween={30} 
            slidesPerGroup={2}
            loopFillGroupWithBlank={true} 
            pagination={{ clickable: true }}
          >
            {order.order_products.map(product => 
              <SwiperSlide key={Math.random() * 3}>
                  <ProductSlideResponsive product={product} />
              </SwiperSlide>
            )}
          </Swiper>
        </Hidden>
      </div>
    </div>
  );
}

export default Checkout
