import React from 'react';
import PropTypes from 'prop-types';

import './TicketsList.scss';

import Ticket from './Ticket';

const TicketsList = ({ tickets }) => (
  <div className="tickets-list">
    {
      tickets.length
        ? tickets.map((ticket, i) => <Ticket key={i} ticket={ticket} />)
        : <div className="tickets-list__no-tickets">Нет билетов</div>
    }
  </div>
);

TicketsList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TicketsList;
