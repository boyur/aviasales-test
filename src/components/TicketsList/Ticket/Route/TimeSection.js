import React from 'react';
import PropTypes from 'prop-types';

import airplane from 'assets/svg/airplane.svg';

const TimeSection = (props) => {
  const { arrival_time, departure_time, stops } = props;
  return (
    <div className="route__time-section">
      <div className="route__time">
        {arrival_time}
      </div>
      <div className="route__path">
        {stops ? `${stops} пересадки` : null}
        <img
          className="route__path-airplane"
          src={airplane}
          alt="airplane"
        />
      </div>
      <div className="route__time">
        {departure_time}
      </div>
    </div>
  );
};

TimeSection.propTypes = {
  departure_time: PropTypes.string.isRequired,
  arrival_time: PropTypes.string.isRequired,
  stops: PropTypes.number.isRequired,
};

export default TimeSection;
