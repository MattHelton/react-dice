import React from 'react';
import CeeLo from './components/ceeLo';
import NavBar from './components/navBar';
import Threes from './components/threes';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Threes />
      <CeeLo />
    </div>
  );
}

export default App;
