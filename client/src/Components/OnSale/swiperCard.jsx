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
    <div style={{
      width: "100%",
      height: "381px",
      background: "transparent",
      padding: "5px 0",
      display: "flex",
      justifyContent: "center",
      overflow: "hidden"
    }}>
      <div style={{
        width: "100%",
        height: "100%",
        background: "white",
        overflow: "hidden",
        position: "relative",
        top: "0"
      }}>
        <div style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          position: "relative",
          bottom: "-100px",
          left: "0"
        }}>
          <img src={spirit.image} alt="" style={{
            minWidth: "450px",
            width: "35%"
          }}/>
        </div>
        <div style={{
          width: "100%",
          height: "100%",
          position: "relative",
          top: "-100%",
          zIndex: 55555,
          display: "flex",
          justifyContent: "flex-end",
          background: "rgba(0,0,0,0.08)"
        }}>
            <div style={{
              display: "flex",
              width: "65%",
              flexDirection: "column",
              padding: "0 80px 0 50px",
              alignItems: "flex-end",
              background: "linear-gradient(51deg, rgba(0,0,0,0) 29%, rgba(55,44,46,0.4598039044719451) 52%, rgba(55,44,46,0.6754901789817489) 77%, rgba(55,44,46,0.8071428400461748) 100%, rgba(0,0,0,0.8799719716988358) 100%)",
              // borderRadius: "150px 0px 0px 0px",
              // borderBottom: "30px solid white",
              // borderTop: "10px solid white",
              // borderLeft: "50px solid white",
              // borderRight: "20px solid rgba(55,44,46,0.5)"
              // boxShadow: "0px 2px 2px 1px black"
            }}>
              <div style={{
                display: "flex",
                width: "80%",
                flexDirection: "column",
                height: "91%",
                alignItems: "flex-end"
              }}>
                <div style={{flexGrow: 1}}>
                  <Link 
                    to={`/products/${spirit.id}`}
                    style={{textDecoration: "none"}}
                  >
                      <h1 style={{
                        width: "100%",
                        padding: "10px 0",
                        textAlign: "center",
                        fontFamily: `"Montserrat", sans-serif`,
                        fontWeight: 400,
                        fontSize: "28px",
                        
                        color: "white",
                      }}
                    >
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
