import React, { useState, useEffect } from 'react';
import AddPeopleForm from '../components/AddPeopleForm';
import Person from '../components/Person';
import { useNavigate } from 'react-router-dom';


function AddPeople() {
    const [people, setPeople] = useState([]);
    const [nextId, setNextId] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const savedPeople = JSON.parse(localStorage.getItem('people'));
        if (savedPeople) {
          setPeople(savedPeople);
          setNextId(savedPeople.length + 1);
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem('people', JSON.stringify(people));
    }, [people]);
    

    const handleAddPerson = (name) => {
      setPeople([...people, { id: nextId, name }]);
      setNextId(nextId + 1);
    };
  
    const handleRemovePerson = (id) => {
      setPeople(people.filter((person) => person.id !== id));
    };

    const handleNext = () => {
       navigate('/items', { state: { people } });
    }
  
    return (
      <div className="add-people">
        <h2>Add People</h2>
        <AddPeopleForm onAddPerson={handleAddPerson} />
        <div className="people-list">
          {people.map((person) => (
            <Person key={person.id} person={person} onRemovePerson={handleRemovePerson} />
          ))}
        </div>
        <button className='next-button' onClick={handleNext}>Next</button>
      </div>
    );
  }
  
  export default AddPeople;