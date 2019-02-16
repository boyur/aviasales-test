import React from 'react';
import PropTypes from 'prop-types';
import './Route.scss';

import MainSection from './MainSection';
import TimeSection from './TimeSection';

const Route = (props) => {
  const {
    arrival_time,
    departure_time,
    stops,
    ...otherProps
  } = props;

  return (
    <div className="route">
      <TimeSection
        arrival_time={arrival_time}
        departure_time={departure_time}
        stops={stops}
      />
      <MainSection {...otherProps} />
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
