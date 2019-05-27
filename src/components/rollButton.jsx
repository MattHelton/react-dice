import React from 'react';
import * as PropTypes from 'prop-types';
import './rollButton.css';

const RollButton = ({ onClick }) => (<div id="roll-button"><button type="button" onClick={onClick}>Roll!</button></div>);

RollButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RollButton;
