import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => (
  <div id="home">
    <h1>Welcome to React Dice</h1>
    <h2>Choose a game</h2>
    <div id="choose-cee-lo">
      <Link to="/ceelo">Cee Lo</Link>
    </div>
    <div id="choose-threes">
      <Link to="/threes">Threes</Link>
    </div>
  </div>
);

export default Home;
