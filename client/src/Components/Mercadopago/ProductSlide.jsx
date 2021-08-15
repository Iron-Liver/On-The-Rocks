import React from 'react';
import './Checkout.css';

const ProductSlide = ({ product }) => {
  return (
    <div className="slide-product">
      <div className="image-background">
        <img src={product.product.image} alt={product.product.name} />
      </div>
      <h2>{product.product.name}</h2>
      <ul className="product-info-ul">
        <li className="info-item-li">
          <div className="info-item-title">
            Category: 
          </div>
          <div>
            {product.product.category}
          </div>
        </li>
        <li className="info-item-li">
          <div className="info-item-title">
            Brand: 
          </div>
          <div>
            {product.product.brand}
          </div>
        </li>
        <li className="info-item-li">
          <div className="info-item-title">
            Size: 
          </div>
          <div>
            {product.product.size}
          </div>
        </li>
        <li className="info-item-li">
          <div className="info-item-title">
            Price: 
          </div>
          <div>
            $ {product.product.price.toFixed(2)} x {product.units}
          </div>
        </li>
        <li className="info-item-li">
          <div className="info-item-title">
            Total:
          </div>
          <div>
            $ {(product.product.price * product.units).toFixed(2)}
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ProductSlide
