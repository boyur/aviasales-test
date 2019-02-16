import React from 'react';
import './TicketsList.scss';

import Ticket from './Ticket';

const TicketsList = () => (
  <div className="tickets-list">
    <Ticket />
    <Ticket />
  </div>
);

export default TicketsList;
