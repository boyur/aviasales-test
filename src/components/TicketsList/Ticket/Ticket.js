import React from 'react';
import PropTypes from 'prop-types';
import carriersConfig from 'configs/carriers';

import './Ticket.scss';

import BuyButton from './BuyButton';
import Route from './Route';

const Ticket = ({ ticket }) => {
  const { price, carrier, ...route } = ticket;

  return (
    <div className="ticket">
      <div className="ticket__left-column">
        <img
          className="ticket__carrier-img"
          src={carriersConfig[carrier].img}
          alt={carriersConfig[carrier].name}
        />
        <BuyButton price={price} />
      </div>
      <div className="ticket__right-column">
        <Route {...route} />
      </div>
    </div>
  );
};

Ticket.propTypes = {
  ticket: PropTypes.shape({
    origin: PropTypes.string,
    origin_name: PropTypes.string,
    destination: PropTypes.string,
    destination_name: PropTypes.string,
    departure_date: PropTypes.string,
    departure_time: PropTypes.string,
    arrival_date: PropTypes.string,
    arrival_time: PropTypes.string,
    carrier: PropTypes.string,
    stops: PropTypes.number,
    price: PropTypes.string,
  }).isRequired,
};

export default Ticket;
