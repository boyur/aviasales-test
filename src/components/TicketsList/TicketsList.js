import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './TicketsList.scss';

import Ticket from './Ticket';

const TicketsList = memo(({ tickets, currency }) => {
  if (!tickets) {
    return <div className="tickets-list__no-tickets">Loading...</div>;
  }

  if (!tickets.length) {
    return <div className="tickets-list__no-tickets">Нет билетов</div>;
  }

  return (
    <div className="tickets-list">
      {tickets.map((ticket, i) => (
        <Ticket
          key={i}
          {...ticket}
          price={ticket[currency]}
        />
      ))}
    </div>
  );
});

TicketsList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object),
  currency: PropTypes.string.isRequired
};

TicketsList.defaultProps = {
  tickets: null
};

export default TicketsList;
