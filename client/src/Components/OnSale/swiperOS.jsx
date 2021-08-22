import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiperOS.css';
import SwiperCard from "./swiperCard";

function SwiperOS(){

    const { Products } = useSelector(
        (state) => state.productReducer
    );

    var sale = Products.filter((spirit) => spirit.hasOwnProperty('onSale'))

    return (
        <Swiper
          className = "swiper"
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => {}}
        >
         
          {sale.map((spirit) => (
              <SwiperSlide>
                  <SwiperCard spirit={spirit} key={Math.random()} /> 
              </SwiperSlide>
                ))}
        </Swiper>
      );


}

export default SwiperOS;