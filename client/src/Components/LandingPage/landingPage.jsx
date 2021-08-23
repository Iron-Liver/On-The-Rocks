import './landingPage.css';
import im1 from '../../assets/au1.jpg'
import im2 from '../../assets/au2.jpg'
import im3 from '../../assets/au3.jpg'
import React, { useRef, useState, useEffect } from "react";

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
 
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import SwiperOS from '../OnSale/swiperOS';


//import aos  
import Aos from 'aos';
import 'aos/dist/aos.css'


import SwiperCore, {
  Navigation
} from 'swiper/core';
import Brands from '../Brands/Brands';

// install Swiper modules
SwiperCore.use([Navigation]);


export const LandingPage = () => {

    useEffect(() => {
      Aos.init({duration:2000})
    }, []);



    return (
      <div>
        <div>
        <header className="landinghead">
        </header>
        <body>
        
        </body>
        </div>
        <div className="vox"></div>
      

        <div data-aos="fade-right" className="title1">
          <h1> On the Rocks is an independent self-made Argentinian family
              owned business providing premium and collectable ranges of spirits.
          </h1>
        </div>
        <div className="slider">
          
                  <SwiperOS/>
  
        </div>
        <div data-aos="fade-up" className="AboutUsContainer">
          <div className="divider-page">
          <div className="dividers"></div>
          <h1 style={{color:'black'}}>About us</h1>
          <div className="dividers"></div>
          </div>
          <div class="container2">
            <div class="card">
              <figure class="card__thumb">
                <img src={im3} alt="by Kyle Cottrell" class="card__image"/>
                <figcaption class="card__caption">
                  <h2 class="card__title">STOCK</h2>
                  <p class="card__snippet">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum deserunt dolore quis pariatur voluptatum vitae totam id. Repellat delectus veritatis nesciunt illo voluptas voluptates vero culpa exercitationem officia aliquid. Eveniet.</p>
                </figcaption>
              </figure>
            </div>

            <div class="card">
              <figure class="card__thumb">
                <img src={im2} alt=" Nathan Dumlao" class="card__image"/>
                <figcaption class="card__caption">
                  <h2 class="card__title">PRODUCTS</h2>
                  <p class="card__snippet">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatem animi tenetur debitis! Reprehenderit, magnam amet quos inventore, aut minima eveniet, iste molestiae quo illum dicta corporis perferendis voluptates odio.</p>
                </figcaption>
              </figure>
            </div>

            <div class="card">
              <figure class="card__thumb">
                <img src={im1} alt=" Daniel Lincoln" class="card__image"/>
                <figcaption class="card__caption">
                  <h2 class="card__title">aaaa </h2>
                  <p class="card__snippet">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore nemo deleniti provident iure tenetur totam sit reiciendis dolore obcaecati saepe, quisquam soluta sapiente nulla culpa veniam adipisci illum consequuntur assumenda.</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
          <div  className="containerBrands">
          <div className="divider-page">
          <div className="dividers"></div>
          <h1 style={{color:'black'}}>Shop by Tipe</h1>
          <div className="dividers"></div>
          </div>
              <Brands />
          </div>
        </div>
    )
}
export default LandingPage;