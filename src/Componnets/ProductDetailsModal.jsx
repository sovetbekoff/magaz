import React from "react";
import "../styles/ProductDetailsModal.css"; // Импорт стилей

const ProductDetailsModal = ({ product, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Подробная информация</h2>
        <p>Название: {product.name}</p>
        <p>Цена: ${product.price.toFixed}</p>
        <p>Детали: {product.details}</p>
        <p>Год издания: {product.year}</p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
