import React, { Component } from 'react';
import RollButton from './rollButton';
import Dice from './dice';
import RollAgain from './rollAgain';
import Score from './score';

class CeeLo extends Component {
  constructor() {
    super();
    this.state = {
      rolledDice: [],
      score: '',
    };
  }

  roll = () => Math.floor(Math.random() * 6 + 1)

  clickHandler = () => {
    const { clickHandler } = this.state;
    console.log('clicked');
    const diceRoll = [];
    for (let i = 0; i < 3; i++) {
      const dice = this.roll();
      diceRoll.push(dice);
      console.log(dice);
    }
    if (diceRoll[0] === diceRoll[1] && diceRoll[1] === diceRoll[2]) {
        this.setState({score: `Triple ${diceRoll[0]}`})
    } else if (diceRoll[0] === diceRoll[1] && diceRoll[1] !== diceRoll[2]) {
      this.setState({score: `${diceRoll[2]}`})
    } else if (diceRoll[0] === diceRoll[2] && diceRoll[1] !== diceRoll[0]) {
      this.setState({score: `${diceRoll[1]}`})
    } else if (diceRoll[1] === diceRoll[2] && diceRoll[0] !== diceRoll[1]) {
      this.setState({score: `${diceRoll[0]}`})
    } else if (diceRoll[0] + diceRoll[1] + diceRoll[2] === 6 && diceRoll[0] * diceRoll[1] !== 4) {
      this.setState({score: '1 2 3! You Lose!'})
    } else if (diceRoll[0] + diceRoll[1] + diceRoll[2] === 15 && diceRoll[0] * diceRoll[1] !== 25) {
      this.setState({score:'4 5 6! You Win!'})
    } else {
    this.setState({ rolledDice: [], score: '' })
    }
    this.setState({ rolledDice: diceRoll });
  }


  render() {
    const { score } = this.state;
    return (
      <div id="cee-lo">
        <RollButton onClick={this.clickHandler} />
        <Dice rolledDice={this.state.rolledDice} />
        <Score score={score}/>
      </div>
    );
  }
}

export default CeeLo;
