import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiperOS.css';
import SwiperCard from "./swiperCard";

function SwiperOS(){

    const { Products } = useSelector(
        (state) => state.productReducer
    );

    var sale = Products.filter((spirit) => spirit.onSale > 0)
    
    return (
        <Swiper
          className = "swiper"
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {sale.map((spirit) => (
              <SwiperSlide key={spirit.id}>
                  <SwiperCard spirit={spirit}  /> 
              </SwiperSlide>
                ))}
        </Swiper>
      );


}

export default SwiperOS;