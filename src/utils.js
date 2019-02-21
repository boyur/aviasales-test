import memoize from 'fast-memoize';
import { parse as dateParser } from 'date-and-time';
import dateConfig from 'configs/date';

export const declOfNum = (number, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[(number > 4 && number < 20) ? 2 : cases[(number < 5) ? number : 5]];
};

export const formatDate = memoize((dateString) => {
  const { months, daysOfWeek } = dateConfig;
  const date = dateParser(dateString, 'DD.MM.YY');

  const month = date.getMonth();
  const dayOfWeak = date.getDay();
  const day = date.getDate();
  const year = date.getFullYear();

  return `${day} ${months[month]} ${year}, ${daysOfWeek[dayOfWeak]}`;
});

export const getFiltredTickets = memoize((tickets, filter) =>
  tickets && tickets.filter(ticket =>
  filter.findIndex(item => item === ticket.stops) !== -1
  ));

export const formatPrice = (price, currency, exchangeRates) => {
  const regexp = /\B(?=(\d{3})+(?!\d))/g;

  if (currency === 'RUB') {
    return `${price} ₽`.replace(regexp, ' ');
  }

  if (!exchangeRates) {
    switch (currency) {
      case 'USD': {
        return `${(price / 60).toFixed(0)} $`.replace(regexp, ' ');
      }
      case 'EUR': {
        return `${(price / 70).toFixed(0)} €`.replace(regexp, ' ');
      }
      default:
        return price;
    }
  }

  const USD = price / exchangeRates.RUB;

  switch (currency) {
    case 'USD': {
      return `${USD.toFixed(0)} $`.replace(regexp, ' ');
    }
    case 'EUR': {
      return `${(USD * exchangeRates.EUR).toFixed(0)} €`.replace(regexp, ' ');
    }
    default:
      return price;
  }
};

