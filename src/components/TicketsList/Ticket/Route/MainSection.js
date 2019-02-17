import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from 'utils/others';

const MainSection = (props) => {
  const {
    origin,
    origin_name,
    destination,
    destination_name,
    arrival_date,
    departure_date,
  } = props;

  return (
    <div className="route__main-section">
      <div className="route__origin">
        <div className="route__city">
          {`${origin}, ${origin_name}`}
        </div>
        <div className="route__date">
          {formatDate(new Date(departure_date))}
        </div>
      </div>
      <div className="route__destination">
        <div className="route__city">
          {`${destination_name}, ${destination}`}
        </div>
        <div className="route__date">
          {formatDate(new Date(arrival_date))}
        </div>
      </div>
    </div>
  );
};

MainSection.propTypes = {
  origin: PropTypes.string.isRequired,
  origin_name: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  destination_name: PropTypes.string.isRequired,
  departure_date: PropTypes.string.isRequired,
  arrival_date: PropTypes.string.isRequired,
};

export default MainSection;
