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
import { useDispatch, useSelector } from 'react-redux';
import { getWishlist } from '../../Redux/Wishlist/wishlistActions';
// install Swiper modules
SwiperCore.use([Navigation]);


export const LandingPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      Aos.init({duration:3000})
    }, []);

    useEffect(() => {
      dispatch(getWishlist());
    }, [dispatch])

    const wishList = useSelector(state => state.wishlistReducer?.wishlists);

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
      

        <div className="title1">
          <h1> On the Rocks is an independent self-made Argentinian family
              owned business providing premium and collectable ranges of spirits.
          </h1>
        </div>

      <div className="slider">
          
        <div style={{
          marginTop: "150px",
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
      <div data-aos="fade-down" >
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
                  <p className="card__snippet">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum deserunt dolore quis pariatur voluptatum vitae totam id. Repellat delectus veritatis nesciunt illo voluptas voluptates vero culpa exercitationem officia aliquid. Eveniet.</p>
                </figcaption>
              </figure>
            </div>

                
            <div className="card">
              <figure className="card__thumb">
                <img src={im2} alt=" Nathan Dumlao" className="card__image"/>
                <figcaption className="card__caption">
                  <h2 className="card__title">PRODUCTS</h2>
                  <p className="card__snippet">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatem animi tenetur debitis! Reprehenderit, magnam amet quos inventore, aut minima eveniet, iste molestiae quo illum dicta corporis perferendis voluptates odio.</p>
                </figcaption>
              </figure>
            </div>

            <div className="card">
              <figure className="card__thumb">
                <img src={im1} alt=" Daniel Lincoln" className="card__image"/>
                <figcaption className="card__caption">
                  <h2 className="card__title">aaaa </h2>
                  <p className="card__snippet">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore nemo deleniti provident iure tenetur totam sit reiciendis dolore obcaecati saepe, quisquam soluta sapiente nulla culpa veniam adipisci illum consequuntur assumenda.</p>
                </figcaption>
              </figure>
            </div>
          </div>



        
          <div  className="containerBrands">
            <div className="divider-page">
              <div className="dividers"></div>
              <h1 style={{color:'black'}}>Shop by Tipe</h1>
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