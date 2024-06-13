import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemView from './screens/ItemView';
import PersonView from './screens/PersonView';
import AddPeople from './screens/AddPeople';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/items" element={<ItemView/>} />
          <Route path="/people" element={<PersonView />} />
          <Route path="/add-people" element={<AddPeople />} />
          <Route path="/" element={<AddPeople />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
