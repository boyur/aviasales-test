import React from 'react';
import PropTypes from 'prop-types';
import carriersConfig from 'configs/carriers';

import './Ticket.scss';

import BuyButton from './BuyButton';

const Ticket = (props) => {
  const {
    price, origin_name, carrier, destination_name,
  } = props;

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
        <div>{`${origin_name} - ${destination_name}`}</div>
      </div>
    </div>
  );
};

Ticket.propTypes = {
  origin_name: PropTypes.string.isRequired,
  destination_name: PropTypes.string.isRequired,
  carrier: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Ticket;
