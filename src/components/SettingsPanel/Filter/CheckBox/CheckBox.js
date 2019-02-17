import React from 'react';
import PropTypes from 'prop-types';
import './CheckBox.scss';
import checkMark from 'assets/svg/checkMark.svg';

const CheckBox = (props) => {
  const {
    id,
    isChecked,
    onChange,
    setOneFilter,
    label,
  } = props;

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={id}
        onChange={onChange}
        checked={isChecked}
      />
      <label
        htmlFor={id}
        style={{ backgroundImage: `url(${checkMark})` }}
      >
        {label}
      </label>
      {
        id !== 'all' && (
          <button
            id={id}
            className="checkbox__only"
            onClick={setOneFilter}
            type="button"
          >
            ТОЛЬКО
          </button>
        )
      }
    </div>
  );
};

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  setOneFilter: PropTypes.func,
  label: PropTypes.string.isRequired,
};

CheckBox.defaultProps = {
  isChecked: false,
  onSetOneFilter: () => {},
};

export default CheckBox;
