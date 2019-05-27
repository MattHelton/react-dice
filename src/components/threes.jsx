import React, { Component } from 'react';
import Dice from './dice';
import RollButton from './rollButton';
import Score from './score';

class Threes extends Component {
  constructor() {
    super();
    this.state = {
      rolledDice: [],
      currentScore: null,
    };
  }

  roll = () => Math.floor(Math.random() * 6 + 1)

  clickHandler = () => {
    const diceRoll = [];
    let total = 0;
    for (let i = 0; i < 5; i++) {
      const dice = this.roll();
      diceRoll.push(dice);
      if (dice === 3) {
        continue;
      } else {
        total += dice;
      }
    }
    this.setState({ rolledDice: diceRoll, currentScore: total });
  }

  render() {
    return (
      <div id="threes">
        <RollButton onClick={this.clickHandler} />
        <Dice rolledDice={this.state.rolledDice} />
        <Score currentScore={this.state.currentScore} />
      </div>
    );
  }
}

export default Threes;
