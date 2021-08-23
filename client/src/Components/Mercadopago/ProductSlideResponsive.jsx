import React from 'react'

const ProductSlideResponsive = ({ product }) => {
  return (
    <div className="slide-product">
      <h2>{product.product.name}</h2>
      <ul className="product-info-ul">
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

export default ProductSlideResponsive
