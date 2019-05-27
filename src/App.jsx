import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CeeLo from './components/ceeLo';
import Home from './components/home';
import NavBar from './components/navBar';
import Threes from './components/threes';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/threes" component={Threes} />
        <Route path="/ceelo" component={CeeLo} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
