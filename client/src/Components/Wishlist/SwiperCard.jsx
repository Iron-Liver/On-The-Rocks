import './SwiperCard.css';
import React from 'react';

const SwiperCard = ({ wishItem }) => {
  return (
    <div className="wishlist-swiper-card-container">
      <img src={wishItem.image} alt="" width="80px"/>
      <h1>{wishItem.name}</h1>
    </div>
  )
}

export default SwiperCard
