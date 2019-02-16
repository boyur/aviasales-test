import React from 'react';
import PropTypes from 'prop-types';

import './TicketsList.scss';

import Ticket from './Ticket';

const TicketsList = ({ tickets }) => (
  <div className="tickets-list">
    {
      tickets.map((ticket, i) => <Ticket key={i} {...ticket} />)
    }
  </div>
);

TicketsList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TicketsList;
