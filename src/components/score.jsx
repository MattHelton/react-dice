import React from 'react';
import * as PropTypes from 'prop-types';
import './score.css';

const Score = ({ currentScore }) => {
  if (!currentScore) {
    return <div />;
  }
  return (
    <div id="score">
    Your current score is :
      {' '}
      {currentScore}
    </div>
  );
};

Score.propTypes = {
  currentScore: PropTypes.number.isRequired,
};

export default Score;
