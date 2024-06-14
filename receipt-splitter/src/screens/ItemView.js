import React, { useState, useEffect } from 'react';
import Item from '../components/Item';
import { fetchItems, assignSplitToItem } from '../services/api';
import { useNavigate } from 'react-router-dom';

function ItemView() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchItems().then(setItems);
  }, []);

  const handleAssignSplit = (itemId, personId, amount) => {
    assignSplitToItem(itemId, personId, amount).then((updatedItem) => {
      setItems((prevItems) =>
        prevItems.map((item) => (item.id === itemId ? updatedItem : item))
      );
    });
  };

  const handleToPersonView = () => {
    navigate('/people', { state: { items } });
  }

  return (
    <div className="items-page">
      <h2>Items</h2>
      <button className='next-button' onClick={handleToPersonView}>Person View</button>
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} onAssignSplit={handleAssignSplit} />
        ))}
      </ul>
    </div>
  );
}

export default ItemView;
