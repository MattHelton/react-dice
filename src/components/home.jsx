import React from 'react';
import './home.css';

const Home = () => (
  <div id="home">
    <h1>Welcome to React Dice!</h1>
    <h2>Choose a game</h2>
    <div id="choose-cee-lo">
      <a href="/ceelo">Cee Lo</a>
    </div>
    <div id="choose-threes">
      <a href="/threes">Threes</a>
    </div>
  </div>
);

export default Home;
