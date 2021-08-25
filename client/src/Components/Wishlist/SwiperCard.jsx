import './SwiperCard.css';
import React from 'react';
import { NewReleases } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const SwiperCard = ({ wishItem }) => {
  return (
    <div className="wishlist-swiper-card-container">
      <Link 
        to={`/products/${wishItem.id}`} 
        style={{
          textDecoration: "none", color: "black"
        }}
      >
      <div className="wishlist-product-info-container">
        <div className="wishlist-product-img">
          <img src={wishItem.image} alt="" width="150px"/>
        </div>
        <div className="wishlist-product-info-text">
          <h4 style={{ textAlign: "center", fontWeight: 400, flexGrow: 1 }}>{wishItem.name}</h4>
          {
            wishItem.onSale ? (
              <div className="wishlist-product-price-container">
                <h4>${wishItem.onSale}</h4>
                <h5>
                  <del>
                    ${wishItem.price}
                  </del>
                </h5>
              </div>
                
                ) : (
                  <h4 className="wishlist-product-regular-price">
                ${wishItem.price}
              </h4>
            )
          }
          
          
        </div>
      </div>
      {
        wishItem.onSale &&
        <div>
          <div className="user-wishlist-flag-shadow landing-flag-shadow" />
          <div className="user-wishlist-flag landing-flag">
              <NewReleases id="landing-flag-icon" />
          </div>
        </div>
      }
      </Link>
    </div>
  )
}

export default SwiperCard
