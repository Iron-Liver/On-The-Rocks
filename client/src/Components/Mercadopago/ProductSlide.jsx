import React from 'react';
import './Checkout.css';

const ProductSlide = ({ product }) => {

  return (
    <div className="slide-product">
      <div className="slide-info-grow">
        <div className="image-background">
          <img 
            src={product.product.image} 
            alt={product.product.name} 
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/android-icon-192x192.png';
            }}
          />
        </div>
        <h2>{product.product.name}</h2>
      </div>
      <ul className="product-info-ul">
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
            {parseFloat(product.product.price).toFixed(2) > parseFloat(product.unitPrice).toFixed(2) ?
              ( 
                <>
                  <del> ${parseFloat(product.product.price).toFixed(2)} </del>
                  <strong> ${parseFloat(product.unitPrice).toFixed(2)}</strong> x {product.units}
                </>
              ) : (
                <>${parseFloat(product.unitPrice).toFixed(2)} x {product.units}</>
              )
            }
          </div>
        </li>
        <li className="info-item-li">
          <div className="info-item-title">
            Total:
          </div>
          <div>
            $ {(parseFloat(product.unitPrice) * parseInt(product.units)).toFixed(2)}
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ProductSlide
