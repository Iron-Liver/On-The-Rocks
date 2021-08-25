import "./wishlist.css";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishlist, deleteWish } from "../../Redux/Wishlist/wishlistActions";
import { getProducts } from "../../Redux/Products/productsActions";
import verifyUser from "../../Utils/verifyUser";
import swal from "sweetalert";
import { IconButton, Paper } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
import { NewReleases } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { logOutUser } from "../../Redux/Users/userActions";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCard from "./SwiperCard";
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

const SwiperWishlist = () => {
  const dispatch = useDispatch();

  const { Products } = useSelector((state) => state.productReducer);
  const { wishlists } = useSelector((state) => state.wishlistReducer);
  const [state, setState] = useState(wishlists);
  const [views, setViews] = useState(window.innerWidth < 680 ? 1 : 3)
  var filtUser,
      filtProduct = [];
  const currentUser = verifyUser();
  if (currentUser?.hasOwnProperty("logout")) {
      dispatch(logOutUser());
      window.location.replace(`${window.location.origin}/login`);
      alert("please login");
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
      });
  }

  const handleResize = () => {
    if(window.innerWidth < 580) {
      setViews(1);
    } else if (window.innerWidth < 950) {
      setViews(2);
    } else {
      setViews(3);
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
                marginTop: "150px"
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
                 slidesPerView={views} spaceBetween={30} pagination={{
                  "clickable": true
                }} className="mySwiper"
              >
                {
                  filtProduct.map((wishItem) =>
                  wishItem[0] && (
                      <SwiperSlide style={{
                        display: "flex",
                        justifyContent: "center"
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
