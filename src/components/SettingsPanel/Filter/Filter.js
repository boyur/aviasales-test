import React from 'react';
import PropTypes from 'prop-types';
import filterConfig from 'configs/filter';
import './Filter.scss';

import CheckBox from './CheckBox';

const Filter = (props) => {
  const { filter, setOneFilter, handleChangeFilter } = props;
  const isAll = filter.length === filterConfig.length;

  return (
    <div className="filter">
      <CheckBox
        id="all"
        label="Все"
        onChange={handleChangeFilter}
        isChecked={isAll}
      />
      {
        filterConfig.map(({ id, label }) => {
          const index = filter.findIndex((item) => item === parseInt(id, 10));
          const isChecked = index !== -1;

          return (
            <CheckBox
              id={id}
              key={id}
              label={label}
              onChange={handleChangeFilter}
              setOneFilter={setOneFilter}
              isChecked={isChecked}
            />
          );
        })
      }
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
  setOneFilter: PropTypes.func.isRequired,
};

export default Filter;
