import React from 'react';
import PropTypes from 'prop-types';

import './Ticket.scss';

const Ticket = ({ ticket }) => (
  <div className="ticket">
    <div>{ticket.price}</div>
    <div>{`${ticket.origin_name} - ${ticket.destination_name}`}</div>
  </div>
);

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
    price: PropTypes.number,
  }).isRequired,
};

export default Ticket;
