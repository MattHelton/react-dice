import React, { Component } from 'react';
import RollButton from './rollButton';
import Dice from './dice';

class CeeLo extends Component {
  constructor() {
    super();
    this.state = {
      rolledDice: [],
    };
  }

  roll = () => Math.floor(Math.random() * 6 + 1)

  clickHandler = () => {
    console.log('clicked');
    const diceRoll = [];
    for (let i = 0; i < 3; i++) {
      const dice = this.roll();
      diceRoll.push(dice);
      console.log(dice);
    }
    this.setState({ rolledDice: diceRoll });
  }

  render() {
    return (
      <div id="cee-lo">
        <RollButton onClick={this.clickHandler} />
        <Dice rolledDice={this.state.rolledDice} />
      </div>
    );
  }
}

export default CeeLo;
