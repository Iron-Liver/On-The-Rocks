import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiperOS.css';
import { getWishlist } from '../../Redux/Wishlist/wishlistActions';
import { getProducts } from '../../Redux/Products/productsActions';
import SwiperCard from "./swiperCard";
import { useEffect, useState } from 'react';

function SwiperOS(){

    const { Products } = useSelector((state) => state.productReducer);
    const { wishlists } = useSelector((state) => state.wishlistReducer);
  

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getWishlist());
      dispatch(getProducts());
    }, [])

    var sale = Products?.filter((spirit) => spirit.onSale > 0)

    var res = []

     wishlists?.map((e) =>{
        Products?.map((f) =>{
         if(e.productId === f.id && !sale.includes(f))
         {
           console.log("f",f)
            sale = sale.concat(f)
            console.log("sale", sale)
         }
         })
    })


   console.log("sale", sale)
    
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