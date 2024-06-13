import React, { useState, useEffect } from 'react';
import Person from '../components/Person';
import { fetchPeople, fetchItems, assignItemsToPerson, assignSplitToItem } from '../services/api';

function PersonView() {
  const [people, setPeople] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchPeople().then(setPeople);
    fetchItems().then(setItems);
  }, []);

  const handleAssignItems = (personId, selectedItems) => {
    assignItemsToPerson(personId, selectedItems).then((updatedPeople) => {
      setPeople(updatedPeople);
    });
  };

  const handleAssignSplit = (itemId, personId, amount) => {
    assignSplitToItem(itemId, personId, amount).then((updatedItem) => {
      setItems((prevItems) =>
        prevItems.map((item) => (item.id === itemId ? updatedItem : item))
      );
    });
  };

  return (
    <div>
      <h2>People</h2>
      <ul>
        {people.map((person) => (
          <Person
            key={person.id}
            person={person}
            items={items}
            onAssignItems={handleAssignItems}
            onAssignSplit={handleAssignSplit}
          />
        ))}
      </ul>
    </div>
  );
}

export default PersonView;
