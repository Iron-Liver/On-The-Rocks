import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import './swiperOS.css';
import { getWishlist } from '../../Redux/Wishlist/wishlistActions';
import { getProducts } from '../../Redux/Products/productsActions';
import SwiperCard from "./swiperCard";
import ProductCard from '../Products/productCard';
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

function SwiperOS(){

    const { Products } = useSelector((state) => state.productReducer);
    const { wishlists } = useSelector((state) => state.wishlistReducer);
  

    var sale = Products.filter((spirit) => spirit.onSale)

    // const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(getWishlist());
    //   dispatch(getProducts());
    // }, [])

    // var sale = Products?.filter((spirit) => spirit.onSale > 0)

    // var res = []

    //  wishlists?.map((e) =>{
    //     Products?.map((f) =>{
    //      if(e.productId === f.id && !sale.includes(f))
    //      {
    //        console.log("f",f)
    //         sale = sale.concat(f)
    //         console.log("sale", sale)
    //      }
    //      })
    // })


   console.log("sale", sale)
    
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
              <SwiperSlide>
                  <SwiperCard spirit={spirit} />
              </SwiperSlide>
          ))}
        </Swiper>
      );


}

export default SwiperOS;