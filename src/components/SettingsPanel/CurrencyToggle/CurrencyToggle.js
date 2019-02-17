import React from 'react';
import './CurrencyToggle.scss';
import PropTypes from 'prop-types';

const currencies = ['RUB', 'USD', 'EUR'];

const CurrencyToggle = ({ currency, handleChangeCurrency }) => (
  <div className="currency-toggle__wrapper">
    <div className="currency-toggle">
      {
        currencies.map((value) => {
          const isActive = value === currency;
          const className = isActive ? 'currency-toggle__button is-active' : 'currency-toggle__button';
          const onClick = () => handleChangeCurrency(value);

          return (
            <button
              key={value}
              className={className}
              onClick={onClick}
              type="button"
            >
              {value}
            </button>
          );
        })
      }
    </div>
  </div>
);

CurrencyToggle.propTypes = {
  currency: PropTypes.string.isRequired,
  handleChangeCurrency: PropTypes.func.isRequired,
};

export default CurrencyToggle;
