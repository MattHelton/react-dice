import React from 'react';
import * as PropTypes from 'prop-types';
import './score.css';

const Score = ({ score }) => {
  if (!score) {
    return <div />;
  }
  return (
    <div id="score">
      Your score is :
      {' '}
      {score}
    </div>
  );
};

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Score;
