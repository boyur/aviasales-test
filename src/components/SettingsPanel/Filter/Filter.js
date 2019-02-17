import React from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';
import filterConfig from 'configs/filter';

import CheckBox from './CheckBox';

const Filter = ({ filter, handleChangeFilter }) => {
  const isAll = filter.length === filterConfig.length;

  const onChange = (e) => {
    const { id } = e.target;
    if (id === 'all') {
      handleChangeFilter(isAll ? [] : [0, 1, 2, 3]);
    } else {
      const stops = parseInt(id, 10);
      const newFilter = filter;
      const index = filter.findIndex(item => item === stops);

      if (index === -1) {
        newFilter.push(stops);
      } else {
        newFilter.splice(index, 1);
      }

      handleChangeFilter(newFilter);
    }
  };

  return (
    <div className="filter">
      <CheckBox
        id="all"
        label="Все"
        onChange={onChange}
        isChecked={isAll}
      />
      {
        filterConfig.map(({ id, label }) => {
          const isChecked = filter.includes(parseInt(id, 10));

          return (
            <CheckBox
              id={id}
              key={id}
              label={label}
              onChange={onChange}
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
};

export default Filter;
