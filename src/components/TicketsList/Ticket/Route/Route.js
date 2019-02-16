import React from 'react';
import PropTypes from 'prop-types';
import './Route.scss';

import airplane from 'assets/svg/airplane.svg';

const Route = (props) => {
  const {
    origin_name,
    destination_name,
    arrival_time,
    departure_time,
    stops,
  } = props;

  return (
    <div className="route">
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
      <div>{`${origin_name} - ${destination_name}`}</div>
    </div>
  );
};

Route.propTypes = {
  origin: PropTypes.string.isRequired,
  origin_name: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  destination_name: PropTypes.string.isRequired,
  departure_date: PropTypes.string.isRequired,
  departure_time: PropTypes.string.isRequired,
  arrival_date: PropTypes.string.isRequired,
  arrival_time: PropTypes.string.isRequired,
  stops: PropTypes.number.isRequired,
};

export default Route;
