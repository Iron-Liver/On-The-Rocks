import React, { useEffect, useState } from 'react';
import './onSale.css';
import { addProductCart } from '../../Redux/Cart/cartActions';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

const SaleCard = ({ spirit }) => {

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
           name: currentSpirit.name,
           stock: currentSpirit.stock,
         });
     }else{
        addProductCart({
            units: 1,
            id: currentSpirit.id,
            price: currentSpirit.onSale,
            image: currentSpirit.image,
            name: currentSpirit.name,
            stock: currentSpirit.stock,
          })
     }
      swal("The product was added to the cart!")   
    }
  }

  return (
    <div>
      <div className="containerproducts">
          <div className="card">
              <div className="imgBx">
                <Link to={`/products/${spirit.id}`}>
                  <img 
                    src={spirit.image} 
                    alt={spirit.name}
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/android-icon-192x192.png'; }}
                  />
                </Link>
              </div>
              <div className="contentBx">
                <Link to={`/products/${spirit.id}`} style={{textDecoration: "none"}}>
                  <h4>{spirit.name}</h4>
                </Link>
                  <div className="size">
                      <h5>{spirit.name}</h5>
                  </div>
                  <div className="color">
                  {spirit.onSale? 
                    <div className="color">
                       <h3 className = "hs"> SALE ${spirit.onSale}</h3>
                       <h5 className="price" >REGULAR ${spirit.price}</h5>
                    </div>
                  :                                                      
                    <h5>${spirit.price}</h5>}
                      <button
                        disabled={spirit.stock < 1} 
                        onClick={handleAddToCart}
                      >
                       Add to cart
                      </button>
                  </div>
              </div>
          </div>
      </div>
  </div>
  )
}

export default SaleCard