import React from "react";
import "../styles/ProductItem.css";
const ProductItem = ({ product, deleteProduct, showProductDetails }) => {
  return (
    <li>
      {product.name}, Год издания: {product.year}
      <button onClick={() => showProductDetails(product)}>Подробнее</button>
      <button onClick={() => deleteProduct(product.id)}>Удалить</button>
    </li>
  );
};

export default ProductItem;
