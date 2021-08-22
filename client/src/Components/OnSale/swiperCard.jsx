import React, { useEffect, useState } from 'react';
import './swiperCard.css';
import { addProductCart } from '../../Redux/Cart/cartActions';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

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
    <div>
      <div >
          <div className="cards">
              <div>
                  <img src={spirit.image} alt="Licorimage" className="image"/>  
              </div>
              <div>
                <Link to={`/products/${spirit.id}`} className="text"style={{textDecoration: "none"}}>
                  <h3 className="text">{spirit.name}</h3>
                </Link>
                  <div>
                  {spirit.onSale? 
                    <div className="oferText">
                       <h2> SALE ${spirit.onSale}</h2>

                    </div>
                  :                                                      
                    <h5>${spirit.price}</h5>}
                     <div className="buton2">
                      <button
                      className="buton"
                        disabled={spirit.stock < 1} 
                        onClick={handleAddToCart}
                      >
                        BUY NOW!
                      </button>
                     </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  )
}

export default SwiperCard