import React from 'react';
import PropTypes from 'prop-types';
import carriersConfig from 'configs/carriers';

import './Ticket.scss';

import BuyButton from './BuyButton';
import BuyButtonMobile from './BuyButtonMobile';

import Route from './Route';

const Ticket = (props) => {
  const { price, carrier, ...route } = props;

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
      <BuyButtonMobile price={price} />
    </div>
  );
};

Ticket.propTypes = {
  origin: PropTypes.string.isRequired,
  origin_name: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  destination_name: PropTypes.string.isRequired,
  departure_date: PropTypes.string.isRequired,
  departure_time: PropTypes.string.isRequired,
  arrival_date: PropTypes.string.isRequired,
  arrival_time: PropTypes.string.isRequired,
  carrier: PropTypes.string.isRequired,
  stops: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
};

export default Ticket;
