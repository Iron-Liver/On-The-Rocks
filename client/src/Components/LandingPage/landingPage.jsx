import './landingPage.css';
// import image1 from '../../assets/xd1.jpg'
// import image2 from '../../assets/xd2.jpg'
import React, { useRef, useState, useEffect } from "react";

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
 
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"

//import aos  
import Aos from 'aos';
import 'aos/dist/aos.css'


import SwiperCore, {
  Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation]);






export const LandingPage = () => {

    useEffect(() => {
      Aos.init({duration:2500})
    }, []);



    return (
      <div>
        <div>
        <header className="landinghead">
        </header>
        </div>
        <div className="vox"></div>
      

        <div data-aos="fade-right" className="title1">
          <h1> On the Rocks is an independent self-made Argentinian family
              owned business providing premium and collectable ranges of spirits.
          </h1>
        </div>
        {/* <div className="slider">
        <Swiper navigation={true}>
          <SwiperSlide >
            <img src={image1} className="img1" alt='img1'></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} className="img1" alt="img2"></img>
          </SwiperSlide>
        </Swiper>

        </div> */}
        <div data-aos="zoom-out" className="AboutUsContainer">
          <h2 style={{color:'black'}}>About us</h2>
          <div class="container2">
            <div class="card">
              <figure class="card__thumb">
                <img src="https://www.animalgourmet.com/wp-content/uploads/2020/07/licor-licores.jpg" alt="by Kyle Cottrell" class="card__image"/>
                <figcaption class="card__caption">
                  <h2 class="card__title">ITEM</h2>
                  <p class="card__snippet">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum deserunt dolore quis pariatur voluptatum vitae totam id. Repellat delectus veritatis nesciunt illo voluptas voluptates vero culpa exercitationem officia aliquid. Eveniet.</p>
                </figcaption>
              </figure>
            </div>

            <div class="card">
              <figure class="card__thumb">
                <img src="https://www.wallpapertip.com/wmimgs/25-257819_300197-title-food-liquor-alcohol-wallpaper-background-liquors.jpg" alt=" Nathan Dumlao" class="card__image"/>
                <figcaption class="card__caption">
                  <h2 class="card__title">ITEM</h2>
                  <p class="card__snippet">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatem animi tenetur debitis! Reprehenderit, magnam amet quos inventore, aut minima eveniet, iste molestiae quo illum dicta corporis perferendis voluptates odio.</p>
                </figcaption>
              </figure>
            </div>

            <div class="card">
              <figure class="card__thumb">
                <img src="https://i.pinimg.com/originals/14/39/34/143934a7d48b57b3433448c418082a11.png" alt=" Daniel Lincoln" class="card__image"/>
                <figcaption class="card__caption">
                  <h2 class="card__title">ITEM</h2>
                  <p class="card__snippet">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore nemo deleniti provident iure tenetur totam sit reiciendis dolore obcaecati saepe, quisquam soluta sapiente nulla culpa veniam adipisci illum consequuntur assumenda.</p>
                </figcaption>
              </figure>
            </div>
          </div>

        </div>
            <div>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolor eligendi nostrum recusandae accusantium ab suscipit obcaecati esse nesciunt voluptate quis tenetur saepe ex reiciendis, quidem sapiente a beatae maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolor eligendi nostrum recusandae accusantium ab suscipit obcaecati esse nesciunt voluptate quis tenetur saepe ex reiciendis, quidem sapiente a beatae maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolor eligendi nostrum recusandae accusantium ab suscipit obcaecati esse nesciunt voluptate quis tenetur saepe ex reiciendis, quidem sapiente a beatae maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolor eligendi nostrum recusandae accusantium ab suscipit obcaecati esse nesciunt voluptate quis tenetur saepe ex reiciendis, quidem sapiente a beatae maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolor eligendi nostrum recusandae accusantium ab suscipit obcaecati esse  ipsum dolor sit amet consectetur adipisicing elit. Commodi dolor eligendi nostrum recusandae accusantium ab suscipit obcaecati esse nesciunt voluptate quis tenetur saepe ex reiciendis, quidem sapiente a beatae maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolor eligendi nostrum recusandae accusantium ab suscipit obcaecati esse nesciunt voluptate quis tenetur saepe ex reiciendis, quidem sapiente a beatae maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolor eligendi nostrum recusandae accusantium ab suscipit obcaecati esse nesciunt voluptate quis tenetur saepe ex reiciendis, quidem sapiente a beatae maiores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolor eligendi nostrum recusandae accusantium ab suscipit obcaecati esse nesciunt voluptate quis tenetur saepe ex reiciendis, quidem sapiente a beatae maiores.</p>
              
            </div>
        </div>
    )
}
export default LandingPage;