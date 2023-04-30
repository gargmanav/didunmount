import React, { useState, useEffect } from 'react';

const Interview = ({ item, onAddItem }) => {
  const [formData, setFormData] = useState({
    item: '',
    quantity: '',
    price: '',
  });

  useEffect(() => {
    setFormData({
      item: item?.item || '',
      quantity: item?.quantity || '',
      price: item?.price || '',
    });
  }, [item]);

  const handleItemChange = (event) => {
    setFormData({ ...formData, item: event.target.value });
  };

  const handleQuantityChange = (event) => {
    setFormData({ ...formData, quantity: event.target.value });
  };

  const handlePriceChange = (event) => {
    setFormData({ ...formData, price: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { item, quantity, price } = formData;
    const newItem = {
      item,
      quantity,
      price,
    };
    onAddItem(newItem);
    setFormData({
      item: '',
      quantity: '',
      price: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="item">Item:</label>
        <input
          type="text"
          id="item"
          name="item"
          value={formData.item}
          onChange={handleItemChange}
        />
      </div>
      <div>
        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handlePriceChange}
        />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default Interview;
