import React, { useEffect, useState } from 'react';
import './products.css';
import { addProductCart } from '../../Redux/Cart/cartActions';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import CustomButton from '../Button/CustomButton'

const ProductCard = ({ spirit }) => {

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
      addProductCart({
        units: 1,
        id: currentSpirit.id,
        price: currentSpirit.price,
        image: currentSpirit.image,
        name: currentSpirit.name
      });
      swal("The product was added to the cart!")   
    }
  }

  return (
    <div className="containerproducts">
        <div className="product-card">
            <div className="imgBx">
              <Link 
                to={`/products/${spirit.id}`} 
                draggable={false}
              >
                <img 
                  src={spirit.image} 
                  alt="Licorimage"
                  draggable={false}
                />
              </Link>
            </div>
            <div className="contentBx">
              <Link to={`/products/${spirit.id}`} style={{textDecoration: "none", background: "transparent"}}>
                <h4>{spirit.name}</h4>
              </Link>
                <div className="info-item">
                  <div>
                    <span>Categor{spirit.categories > 1 ? "ies" : "y"}: </span>
                  {
                    spirit.categories.map(category => 
                      <span>{category.name} </span>
                    )
                  }
                  </div>
                  <span style={{ margin: "3px" }}>Brand: {spirit.brand}</span>
                </div>
                <div className="color">
                  {spirit.onSale? 
                    <div className="color">
                        <h3 className = "hs"> SALE ${spirit.onSale}</h3>
                        <h5 className="price" >REGULAR ${spirit.price}</h5>
                    </div>
                  : (<><h5 style={{
                      fontSize: "16px",
                      fontWeight: "400"
                    }}>${spirit.price}</h5>
                    <CustomButton
                      disabled={spirit.stock < 1} 
                      onClick={handleAddToCart}
                    >
                      Add to cart
                    </CustomButton></>)
                  }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
