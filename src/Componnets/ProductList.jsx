import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import ProductForm from "./ProductForm";
import ProductDetailsModal from "./ProductDetailsModal";
import "../styles/ProductList.css"; // Импорт стилей

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProductForEdit, setSelectedProductForEdit] = useState(null);

  // Загрузка данных из localStorage (если необходимо)
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(savedProducts);
  }, []);

  // Добавление нового товара
  const addProduct = (newProduct) => {
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  // Обновление информации о товаре
  const updateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  // Удаление товара
  const deleteProduct = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };
  const editProduct = (product) => {
    setSelectedProductForEdit(product);
  };

  // Открытие модального окна с подробной информацией
  const showProductDetails = (product) => {
    setSelectedProduct(product);
  };

  // Закрытие модального окна
  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <h1>Каталог товаров</h1>
      <ProductForm
        addProduct={addProduct}
        updateProduct={updateProduct}
        productForEdit={selectedProductForEdit} // Передача товара для редактирования
      />
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            deleteProduct={deleteProduct}
            showProductDetails={showProductDetails}
            editProduct={editProduct} // Передача функции редактирования
          />
        ))}
      </ul>
      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={closeProductDetails}
        />
      )}
    </div>
  );
};

export default ProductList;
