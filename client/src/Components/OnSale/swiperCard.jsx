import React, { useEffect, useState } from 'react';
import './swiperCard.css';
import { addProductCart } from '../../Redux/Cart/cartActions';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import CustomButton from '../Button/CustomButton';

const SwiperCard = ({ spirit }) => {

  const [currentSpirit, setCurrentSpirit] = useState();

  useEffect(() => {
    setCurrentSpirit(spirit);
  }, [spirit])
  
  
  const handleAddToCart = () => {
    let date = JSON.parse(localStorage.getItem('data')) || []
    let data = date.filter(e => e.id === currentSpirit.id)
    if (date.length > 0 && data.length > 0){
         swal("The product is already in the cart!")
    } else {

     if(!currentSpirit.onSale)
     {
         addProductCart({
           units: 1,
           id: currentSpirit.id,
           price: currentSpirit.price,
           image: currentSpirit.image,
           name: currentSpirit.name
         });
     }else{
        addProductCart({
            units: 1,
            id: currentSpirit.id,
            price: currentSpirit.onSale,
            image: currentSpirit.image,
            name: currentSpirit.name
          })
     }
      swal("The product was added to the cart!")   
    }
  }

  return (
    <div className="swiper-card-container">
      <div className="aaa">
        <div className="bbb">
          <img src={spirit.image} alt="" className="swiper-card-spirit-image" />
        </div>
        <div className="ccc">
            <div className="ddd">
              <div className="eee">
                <div style={{flexGrow: 1}}>
                  <Link 
                    to={`/products/${spirit.id}`}
                    style={{textDecoration: "none"}}
                  >
                    <h1 className="fff">
                      {spirit.name}
                    </h1>
                  </Link>
                </div>
                <div style={{
                  display: "flex",
                  width: "max-content",
                  height: "100px",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  flexDirection: "column"
                }}>
                    <div style={{
                      display: "flex",
                      width: "max-content",
                      justifyContent: "center",
                      alignItems: "baseline"
                    }}>
                      {spirit.onSale? 
                      <div>
                        <h3 style={{
                        fontFamily: `"Montserrat", sans-serif`,
                        fontWeight: 400,
                        fontSize: "30px",
                          color: "white",
                          margin: "0 5px"
                        }}>
                          ${spirit.onSale}
                        </h3>
                        <h4 style={{
                          fontFamily: `"Montserrat", sans-serif`,
                          margin: "0 5px",
                          fontSize: "20px",
                          fontWeight: 300,
                          color: "#333",
                        }}><del>${spirit.price}</del></h4>
                        </div>
                        :
                        <div>
                        <h3 style={{
                        fontFamily: `"Montserrat", sans-serif`,
                        fontWeight: 400,
                        fontSize: "30px",
                          color: "white",
                          margin: "0 5px"
                        }}>
                          ${spirit.price}
                        </h3>
                       </div>}
                   </div>

                    <CustomButton 
                      elevation={0} 
                      width="150px" 
                      height="40px"
                      onClick={handleAddToCart}
                    >
                      <span style={{ fontSize: "20px"}}>
                        Add to cart
                      </span>
                    </CustomButton>
                </div>
                  {/* : 
                  <div className="noOferText">
                    <h2>WISH ${spirit.price}</h2>
                  </div>}
                     <div className="buton2">
                      <button
                      className="buton"
                        disabled={spirit.stock < 1} 
                        onClick={handleAddToCart}
                      >
                        BUY NOW!
                      </button>
                     </div>
                  </div> */}
              </div>
            </div>
        </div>
      </div>
  </div>
  )
}

export default SwiperCard
