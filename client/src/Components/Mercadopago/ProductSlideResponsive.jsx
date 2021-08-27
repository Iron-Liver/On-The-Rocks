import React from "react";
import { Hidden } from "@material-ui/core";

const ProductSlideResponsive = ({ product }) => {

  console.log(product)

  return (
    <div className="slide-product-responsive">
      <div className="slide-product-img-name">
        <div className="slide-product-img-circle">
          <img src={product.product.image} alt={product.name} width="90px"/>
        </div>
        <div className="slide-product-info-text">
          <h2>{product.product.name}</h2>
          <h4>Brand: {product.product.brand}</h4>
        </div>
      </div>
      <ul className="product-info-ul">
        <li className="info-item-li">
          <div className="info-item-title">Price:</div>
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
          <div className="info-item-title">Total:</div>
          <div>
            ${(parseFloat(product.unitPrice) * parseInt(product.units)).toFixed(2)}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductSlideResponsive;
