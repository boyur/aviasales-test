import React from 'react';
import PropTypes from 'prop-types';
import './BuyButton.scss';

const BuyButton = ({ price, text }) => (
  <button className="buy-button" type="button">
    <div>{text}</div>
    <div>{`за ${price}`}</div>
  </button>
);

BuyButton.propTypes = {
  price: PropTypes.string.isRequired,
  text: PropTypes.string,
};

BuyButton.defaultProps = {
  text: 'Купить',
};


export default BuyButton;
