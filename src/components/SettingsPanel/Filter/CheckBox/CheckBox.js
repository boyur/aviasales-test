import React from 'react';
import PropTypes from 'prop-types';
import './CheckBox.scss';
import checkMark from 'assets/svg/checkMark.svg';

const CheckBox = (props) => {
  const {
    id,
    isChecked,
    onChange,
    handleChangeFilter,
    label,
  } = props;

  const onClickOnlyButton = () => {
    handleChangeFilter([parseInt(id, 10)]);
  };

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
          <div
            className="checkbox__only"
            onClick={onClickOnlyButton}
          >
            ТОЛЬКО
          </div>
        )
      }
    </div>
  );
};

CheckBox.propTypes = {
  id: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

CheckBox.defaultProps = {
  isChecked: false,
};

export default CheckBox;
