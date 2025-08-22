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
/*   let curr = []
  currentSpirit?.map((e) =>{
    if(currentSpirit.name){
      curr.push({
        id: e.id+900,
        productId: e.id,
      }
      )
    }
  }) */
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
           name: currentSpirit.name,
           stock: currentSpirit.stock
         });
     }else{
        addProductCart({
            units: 1,
            id: currentSpirit.id,
            price: currentSpirit.onSale,
            image: currentSpirit.image,
            name: currentSpirit.name,
            stock: currentSpirit.stock
          })
     }
      swal("The product was added to the cart!")   
    }
  }
  return (
    <div className="swiper-card-container">
      <div className="aaa">
        <div className="bbb">
          <img 
            src={spirit.image} 
            alt={spirit?.name || 'Product image'} 
            className="swiper-card-spirit-image"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/android-icon-192x192.png';
            }}
          />
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
                <div className="ggg">
                    <div className="hhh">
                      <h3 className="iii">
                        ${spirit.onSale}
                      </h3>
                      <h4 className="jjj"><del>${spirit.price}</del></h4>
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
