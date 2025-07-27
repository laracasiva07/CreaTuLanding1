import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/products.js';  // ajustá la ruta según tu estructura

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);

  if (!product) return <p>Producto no encontrado</p>;

  const handleAddToCart = () => {
    alert(`Agregaste ${product.nombre} al carrito!`);
  };

  return (
    <div style={{ padding: 20, color: '#8B0000', fontFamily: 'Poppins, sans-serif' }}>
      <h2>{product.nombre}</h2>
      <img src={product.img} alt={product.nombre} style={{ maxWidth: '300px', borderRadius: '8px' }} />
      <p>{product.descripcion}</p>
      <p><strong>Precio:</strong> ${product.precio}</p>
      <button
        onClick={handleAddToCart}
        style={{
          backgroundColor: '#ffe066',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: '600',
          color: '#8B0000',
          marginTop: '10px'
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductDetail;
