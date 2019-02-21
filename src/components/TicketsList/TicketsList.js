import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from 'utils';

import './TicketsList.scss';

import Ticket from './Ticket';

const TicketsList = memo(({ tickets, currency, exchangeRates }) => {
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
          price={formatPrice(ticket.price, currency, exchangeRates)}
        />
      ))}
    </div>
  );
});

TicketsList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object),
  currency: PropTypes.string.isRequired,
  exchangeRates: PropTypes.object
};

TicketsList.defaultProps = {
  tickets: null,
  exchangeRates: null
};

export default TicketsList;
