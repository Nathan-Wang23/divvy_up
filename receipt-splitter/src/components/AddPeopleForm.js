import React, { useState } from 'react';

function AddPeopleForm({ onAddPerson }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      onAddPerson(name);
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-person-form">
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Add Person</button>
    </form>
  );
}

export default AddPeopleForm;
