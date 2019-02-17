import React from 'react';
import PropTypes from 'prop-types';
import './BuyButtonMobile.scss';

const BuyButtonMobile = ({ price, text }) => (
  <button className="buy-button-mobile" type="button">
    {`${text} за ${price}`}
  </button>
);

BuyButtonMobile.propTypes = {
  price: PropTypes.string.isRequired,
  text: PropTypes.string,
};

BuyButtonMobile.defaultProps = {
  text: 'Купить',
};


export default BuyButtonMobile;
