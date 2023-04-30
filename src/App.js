import React, { useState } from 'react';
import Interview from './Components/Interview';


const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1>My Shopping List</h1>
      <Interview onAddItem={handleAddItem} />
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.item} - {item.quantity} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

