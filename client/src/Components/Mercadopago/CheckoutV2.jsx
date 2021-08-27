import './Checkout.css';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Hidden } from "@material-ui/core"

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
import ProductSlide from './ProductSlide';
import OrderInfo from './OrderInfo';
import ProductSlideResponsive from './ProductSlideResponsive';

const { REACT_APP_PUBLIC_KEY_MERCADOPAGO } = process.env;

// install Swiper modules
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

const CheckoutV2 = ({ data, order, stock }) => {

  useEffect(() => {
    const mp = new window.MercadoPago(REACT_APP_PUBLIC_KEY_MERCADOPAGO, {
      locale: 'es-AR'
    });


    mp.checkout({
      preference: {
        id: data.id
      },
      render: {
        container: '.payment-button', // Indica el nombre de la clase donde se mostrará el botón de pago
        label: 'Pay', // Cambia el texto del botón de pago (opcional)
      }
    });
  }, [data])

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
          <Hidden smDown>
            <div className="swiper-wrap">
              <Swiper 
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
          <div className="swiper-wrap-responsive">
            <h2 style={{textAlign: "center", fontFamily: `"Montserrat", sans-serif`, fontWeight: 300}}>PRODUCTS</h2>
              <Swiper
                slidesPerView={1} 
                spaceBetween={30}
                pagination={true}
              >
                {order.order_products.map(product => 
                  <SwiperSlide key={Math.random() * 3}>
                      <ProductSlideResponsive product={product} />
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          </Hidden>
      </div>
    </div>
  )
}

export default CheckoutV2
