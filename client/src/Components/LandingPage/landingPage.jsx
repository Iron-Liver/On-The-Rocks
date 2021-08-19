import './landingPage.css';
// import image1 from '../../assets/xd1.jpg'
// import image2 from '../../assets/xd2.jpg'
// import React, { useRef, useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"


import SwiperCore, {
  Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation]);

export const landingPage = () => {
    return (
      <div>
        <div>
        <header className="landinghead">
        </header>
        </div>             
        <div className="vox"></div>
        </div>
      
        

        
    )
}
export default landingPage