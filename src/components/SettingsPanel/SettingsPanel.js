import React from 'react';
import PropTypes from 'prop-types';
import './SettingsPanel.scss';

import CurrencyToggle from './CurrencyToggle';
import Filter from './Filter';

const SettingsPanel = (props) => {
  const {
    currency,
    filter,
    handleChangeCurrency,
    handleChangeFilter,
    onSetOneFilter,
  } = props;

  return (
    <div className="settings-panel">
      <div className="settings-panel__container">
        <div className="settings-panel__label">
          ВАЛЮТА
        </div>
        <CurrencyToggle
          currency={currency}
          handleChangeCurrency={handleChangeCurrency}
        />
        <div className="settings-panel__label">
          КОЛИЧЕСТВО ПЕРЕСАДОК
        </div>
        <Filter
          filter={filter}
          handleChangeFilter={handleChangeFilter}
          onSetOneFilter={onSetOneFilter}
        />
      </div>
    </div>
  );
};

SettingsPanel.propTypes = {
  currency: PropTypes.string.isRequired,
  filter: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleChangeCurrency: PropTypes.func.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
  onSetOneFilter: PropTypes.func.isRequired,
};

export default SettingsPanel;
