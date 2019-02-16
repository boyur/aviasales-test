import React from 'react';
import './СurrencySelector.scss';
import PropTypes from 'prop-types';

const currencies = ['RUB', 'USD', 'EUR'];

const CurrencySelector = ({ currency, handleChangeCurrency }) => (
  <>
    <div className="settings-panel__label">
      ВАЛЮТА
    </div>
    <div className="currency-selector">
      {
        currencies.map((value) => {
          const isActive = value === currency;
          const className = isActive ? 'currency-selector__button is-active' : 'currency-selector__button';
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
  </>
);

CurrencySelector.propTypes = {
  currency: PropTypes.string.isRequired,
  handleChangeCurrency: PropTypes.func.isRequired,
};

export default CurrencySelector;
