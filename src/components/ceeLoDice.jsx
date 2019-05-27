import React from 'react';

const CeeLoDice = ({ rolledDice }) => {
  if (rolledDice.length === 3) {
    const rolled = rolledDice.map(die => <div className="dice" key={die.id}>{die}</div>);
    return (
      <div id="rolled-dice">
        { rolled }
      </div>
    );
  }
  return <div />;
};

export default CeeLoDice;
