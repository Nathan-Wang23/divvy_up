import React, { useState, useEffect } from 'react';
import Item from '../components/Item';
import { fetchItems, assignSplitToItem } from '../services/api';

function ItemView() {
  const [items, setItems] = useState([]);

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

  return (
    <div className="items-page">
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} onAssignSplit={handleAssignSplit} />
        ))}
      </ul>
    </div>
  );
}

export default ItemView;
