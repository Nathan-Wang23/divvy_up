import React from 'react';

function Person({ person, onRemovePerson }) {
  return (
    <div className="person">
      <span>{person.name}</span>
      <button onClick={() => onRemovePerson(person.id)}>Remove</button>
    </div>
  );
}

export default Person;
