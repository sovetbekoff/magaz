import React from "react";

const ProductItem = ({
  product,
  deleteProduct,
  showProductDetails,
  editProduct,
}) => {
  return (
    <li>
      <h3>{product.name}</h3>
      <p>Год издания: {product.year}</p>
      <p>Цена: ${product.price.toFixed}</p>
      <button onClick={() => showProductDetails(product)}>Подробнее</button>
      <button onClick={() => editProduct(product)}>Редактировать</button>
      <button onClick={() => deleteProduct(product.id)}>Удалить</button>
    </li>
  );
};

export default ProductItem;
