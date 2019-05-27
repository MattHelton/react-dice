import React from 'react';
import * as PropTypes from 'prop-types';

const Score = ({ currentScore }) => {
  if (!currentScore) {
    return <div />;
  }
  return (
    <React.Fragment>
    Your current score is :
      {' '}
      {currentScore}
    </React.Fragment>
  );
};

Score.propTypes = {
  currentScore: PropTypes.number.isRequired,
};

export default Score;
