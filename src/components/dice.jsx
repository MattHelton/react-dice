import React from 'react';
import * as PropTypes from 'prop-types';
import './dice.css';

const Dice = ({ rolledDice }) => {
  if (rolledDice.length === 5) {
    const rolled = rolledDice.map(die => <div className="dice" key={die.id}>{die}</div>);
    return (
      <div id="rolled-dice">
        {rolled}
      </div>
    );
  }
  return <div />;
};

Dice.propTypes = {
  rolledDice: PropTypes.arrayOf.isRequired,
};

export default Dice;
