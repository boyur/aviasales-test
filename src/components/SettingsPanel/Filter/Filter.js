import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';
import filterConfig from 'configs/filter';

import CheckBox from './CheckBox';

class Filter extends Component {
  onChange = (e) => {
    const { filter, handleChangeFilter } = this.props;
    const { id } = e.target;

    if (id === 'all') {
      const isAll = filter.length === filterConfig.length;
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

  render() {
    const { filter, setOneFilter } = this.props;
    const isAll = filter.length === filterConfig.length;

    return (
      <div className="filter">
        <CheckBox
          id="all"
          label="Все"
          onChange={this.onChange}
          isChecked={isAll}
        />
        {
          filterConfig.map(({ id, label }) => {
            const isChecked = filter.findIndex((item) => item === parseInt(id, 10)) !== -1;

            return (
              <CheckBox
                id={id}
                key={id}
                label={label}
                onChange={this.onChange}
                setOneFilter={setOneFilter}
                isChecked={isChecked}
              />
            );
          })
        }
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
  setOneFilter: PropTypes.func.isRequired,
};

export default Filter;
