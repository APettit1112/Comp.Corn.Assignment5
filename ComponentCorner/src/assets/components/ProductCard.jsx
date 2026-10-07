import React from 'react';
import './ProductCard.css';

const ProductCard = ({ id, name, price, image, description, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="price">${price.toFixed(2)}</p>
      <p>{description}</p>
      <button
        type="button"
        onClick={() => onAddToCart({ id, name, price, image, description })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;