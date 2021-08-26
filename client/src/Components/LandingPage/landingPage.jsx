import './landingPage.css';
import im1 from '../../assets/au1.jpg'
import im2 from '../../assets/au2.jpg'
import im3 from '../../assets/au3.jpg'
import React, { useEffect } from "react";
import Locations from '../Maps/Locations'; 
import verifyUser from '../../Utils/verifyUser';
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
import SwiperWishlist from '../Wishlist/SwiperWishlist';
import { useDispatch } from 'react-redux';
import { getWishlist } from '../../Redux/Wishlist/wishlistActions';
// install Swiper modules
SwiperCore.use([Navigation]);


export const LandingPage = () => {

    const dispatch = useDispatch();


    useEffect(() => {
      window.scrollTo(0,0)
    }, [])

    useEffect(() => {
      Aos.init({duration:3000})
    }, []);

    useEffect(() => {
      dispatch(getWishlist());
    }, [dispatch])

    const currentUser = verifyUser();

    return (
      <div>
      <div>
        <div>
          <header className="landinghead">
          </header>
        </div>             
        <div className="vox"></div>
      </div>
      
      <div className="title-landing">
        <h1> On the Rocks is an independent self-made Argentinian family
            owned business providing premium and collectable ranges of spirits.
        </h1>
      </div>

      <div className="slider">
          
        <div style={{
          marginTop: "80px",
          marginBottom: "60px",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems:'center',
        }}>
          <div className="divider-page">
            <div className="dividers"></div>
            <h1 style={{color:'black', wordBreak: "keep-all", minWidth: "max-content"}}>On sale</h1>
            <div className="dividers"></div>
          </div>
        </div>
      </div> 
      <div>
          <SwiperOS />
      </div>

      {
        currentUser && 
          <SwiperWishlist />
      }
      



        <div className="AboutUsContainer">
          <div className="divider-page">
            <div className="dividers"></div>
            <h1 style={{color:'black'}}>About us</h1>
            <div className="dividers"></div>
          </div>
        </div>



          <div className="container2">

            <div className="card">
              <figure className="card__thumb">
                <img src={im3} alt="by Kyle Cottrell" className="card__image"/>
                <figcaption className="card__caption">
                  <h2 className="card__title">STOCK</h2>
                  <p className="card__snippet"><b>We have access </b> to a vast array of liquor, please do not hesitate to contact us via email on <b>ontherockscompanydrinks@gmail.com</b> if there is a particular bottle you have in mind but cannot locate on our website. We are confident that if you want it, we can get it. Put us to the test. </p>
                </figcaption>
              </figure>
            </div>

                
            <div className="card">
              <figure className="card__thumb">
                <img  src={im2} alt=" Nathan Dumlao" className="card__image"/>
                <figcaption className="card__caption">
                  <h2 className="card__title">PRODUCTS</h2>
                  <p className="card__snippet"> <b>We strive </b> to provide liquor enthusiasts spirits that they can enjoy for the cheapest price.

Our business philosophy is to <b>continuously source new products</b> to add to our extensive range of liquor to make your online shopping experience easy and continue to deliver great service.
So if you have a special occasion to purchase for, we believe we will have that bottle that will give you that wow factor.
</p>
                </figcaption>
              </figure>
            </div>

            <div className="card">
              <figure className="card__thumb">
                <img   src={im1} alt=" Daniel Lincoln" className="card__image"/>
                <figcaption className="card__caption">
                  <h2 className="card__title">About Us</h2>
                  <p className="card__snippet">
<b>On The Rocks</b> is an independent self-made Argentinian family owned business providing premium and collectable ranges of spirits.

With over 30 years in the industry, our recent venture of going online was ignited by our passion for sourcing <b>premium range spirits</b>, because here at On The Rocks, we love to drink.</p>
                </figcaption>
              </figure>
            </div>
          </div>



        
          <div  className="containerBrands">
            <div className="divider-page">
              <div className="dividers"></div>
              <h1 style={{color:'black'}}>Shop by Type</h1>
              <div className="dividers"></div>
            </div>
          </div>
          <div className="brandsss">
          <Brands />
          </div>
          
          <div className="location">
          <div className="divider-page">
            <div className="dividers"></div>
            <h1 style={{color:'black'}}>Branch Offices</h1>
            <div className="dividers"></div>
          </div>     
              <Locations />
          </div>

    </div>


      
    )
  }

export default LandingPage;