import React, { useState } from "react";
import "../styles/ProductForm.css"; // Импорт стилей

const ProductForm = ({ addProduct, updateProduct }) => {
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    price: "",
    details: "",
    year: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;

    if (formData.id) {
      updateProduct(formData);
    } else {
      const newProduct = { ...formData, id: Date.now() };
      addProduct(newProduct);
    }

    setFormData({ id: null, name: "", price: "", details: "", year: "" });
  };

  return (
    <div className="product-form">
      <h2>Добавить/Редактировать товар</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Название"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Цена"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Детали"
          value={formData.details}
          onChange={(e) =>
            setFormData({ ...formData, details: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Год издания"
          value={formData.year}
          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
        />
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
};

export default ProductForm;
