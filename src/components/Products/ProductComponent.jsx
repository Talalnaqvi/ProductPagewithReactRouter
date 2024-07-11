import React from 'react';
import './ProductComponents.css' ;


const ProductComponent = ({ name, description, price, imageUrl }) => {
  return (

    <div className="product">
      <div className="product-image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">Price: ${price}</p>
      </div>
    </div>

  );
};

export default ProductComponent;
