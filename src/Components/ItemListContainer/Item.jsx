import React from "react";
import products from "../../data/products";

const Item = ({ product }) => {
  return (
    <div className="card">
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} width="150" />
      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
    </div>
  );
};

export default Item;
