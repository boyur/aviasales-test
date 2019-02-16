import React from 'react';
import PropTypes from 'prop-types';
import './SettingsPanel.scss';

import CurrencySelector from './CurrencySelector';

const SettingsPanel = (props) => {
  const { currency, handleChangeCurrency } = props;
  return (
    <div className="settings-panel">
      <div className="settings-panel__container">
        <CurrencySelector
          currency={currency}
          handleChangeCurrency={handleChangeCurrency}
        />
      </div>
    </div>
  );
};

SettingsPanel.propTypes = {
  currency: PropTypes.string.isRequired,
  handleChangeCurrency: PropTypes.func.isRequired,
};

export default SettingsPanel;
