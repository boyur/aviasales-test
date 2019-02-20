import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './SettingsPanel.scss';

import CurrencyToggle from './CurrencyToggle';
import Filter from './Filter';

const SettingsPanel = memo((props) => {
  const {
    currency,
    filter,
    handleChangeCurrency,
    handleChangeFilter,
    setOneFilter,
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
          setOneFilter={setOneFilter}
        />
      </div>
    </div>
  );
});

SettingsPanel.propTypes = {
  currency: PropTypes.string.isRequired,
  filter: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleChangeCurrency: PropTypes.func.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
  setOneFilter: PropTypes.func.isRequired,
};

export default SettingsPanel;
