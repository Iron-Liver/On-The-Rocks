import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiperOS.css';
import SwiperCard from "./swiperCard";
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
import { getWishlist } from '../../Redux/Wishlist/wishlistActions';
import { getProducts } from '../../Redux/Products/productsActions';
import { useEffect, useState } from 'react';

// install Swiper modules
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard,Autoplay]);

function SwiperOS(){

  const { Products } = useSelector((state) => state.productReducer);
  const { wishlists } = useSelector((state) => state.wishlistReducer);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWishlist());
    dispatch(getProducts());
  }, [])


  useEffect(() => {
  },[wishlists])

  var sale = Products?.filter((spirit) => spirit.onSale > 0)

  var res = []


  if(wishlists.length > 0){
    wishlists?.map((e) =>{
       Products?.map((f) =>{
        if(e.productId === f.id && !sale.includes(f))
        {
          sale = sale.concat(f) 
        }
        })
   })
  }

    
    return (
        <Swiper
          className = "swiper"
          slidesPerView={1}
          navigation
          spaceBetween={5}
          pagination={true}
          autoplay={{
            delay: 6000
          }}
          loop={true}
        >
          {sale.map((spirit) => (
              <SwiperSlide key={spirit.id}>
                  <SwiperCard spirit={spirit} />
              </SwiperSlide>
          ))}
        </Swiper>
      );


}

export default SwiperOS;