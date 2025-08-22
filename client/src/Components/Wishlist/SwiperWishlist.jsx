import "./wishlist.css";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import { getWishlist } from "../../Redux/Wishlist/wishlistActions";
import { getProducts } from "../../Redux/Products/productsActions";
import verifyUser from "../../Utils/verifyUser";
import swal from "sweetalert";
import { logOutUser } from "../../Redux/Users/userActions";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCard from "./SwiperCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import Swiper core and required modules
import {
  Pagination
} from 'swiper/modules';

const SwiperWishlist = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const initialState = window.innerWidth < 580 ? 
    1
  : window.innerWidth < 950 ?
    2
  : window.innerWidth < 1200 ?
    3
  : 4;

  const { Products } = useSelector((state) => state.productReducer);
  const { wishlists } = useSelector((state) => state.wishlistReducer);
  const [state, setState] = useState(wishlists);
  const [views, setViews] = useState(initialState);
  var filtUser,
      filtProduct = [];
  const currentUser = verifyUser();
  if (currentUser?.hasOwnProperty("logout")) {
      dispatch(logOutUser())
      history.push('/')
      swal("Session expired","Please login","warning")
  }
  useEffect(() => {
      dispatch(getProducts());
      dispatch(getWishlist());
  }, [dispatch]);

  useEffect(() => {
      (async function () {
          wishlists.length !== state.length && (await setState(wishlists));
          if (!state || wishlists.length !== state.length)
              await setState(wishlists);
      })();
  }, [state, wishlists, Products]);

  if (Products && state.length > 0) {
      filtUser = state.filter((x) => x.userId === currentUser.id);
      filtProduct = filtUser.map((x) => {
        return Products?.filter((e) => e.id === x.productId);
      }).sort((a, b) => {
        if(a[0]?.onSale < b[0]?.onSale) {
          return 1
        } 
        if(a[0]?.onSale > b[0]?.onSale) {
          return -1
        }
        return 0
      });
      // filtProduct = [...preSort.filter(product => product[0].onSale !== null),
      //    ...preSort.filter(product => product[0].onSale === null)]
  }

  const handleResize = () => {
    if(window.innerWidth < 580) {
      setViews(1);
    } else if (window.innerWidth < 950) {
      setViews(2);
    } else if (window.innerWidth < 1200) {
      setViews(3);
    } else {
      setViews(4)
    }
  };

  window.addEventListener("resize", handleResize);

  return (
    <div>
      {
        state && 
        filtProduct?.length > 0 && 
            <div className="slider">
              <div style={{
                marginTop: "150px",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "center"
              }}>
                <div className="divider-page">
                  <div className="dividers"></div>
                  <h1 style={{color:'black', wordBreak: "keep-all", minWidth: "max-content"}}>Wishlist</h1>
                  <div className="dividers"></div>
                </div>
            <div style={{
              width: "100%",
              height: "max-content",
              marginTop: "40px"
            }}>
              <Swiper
                modules={[Pagination]}
                slidesPerView={views} 
                spaceBetween={2} 
                pagination={{
                "clickable": true
                }}
                style={{
                  width: "92%",
                  height: "415px"
                }}
              >
                {
                  filtProduct.map((wishItem) =>
                  wishItem[0] && (
                      <SwiperSlide style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "max-content"
                      }}>
                        <SwiperCard wishItem={wishItem[0]}/>
                      </SwiperSlide>
                    )
                  )
                }
            </Swiper>
          </div>
          </div>
        </div>
      }
    </div>
  )
}

export default SwiperWishlist
