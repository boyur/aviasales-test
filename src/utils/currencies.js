export const convertCurrency = (price, currency, exchangeRates) => {
  if (!exchangeRates) {
    switch (currency) {
      case 'RUB': return price;
      case 'USD': return price / 60;
      case 'EUR': return price / 70;
      default: return price;
    }
  }

  switch (currency) {
    case 'RUB': return price;
    case 'USD': return price / exchangeRates.USDRUB;
    case 'EUR': return (price / exchangeRates.USDRUB) * exchangeRates.USDEUR;
    default: return price;
  }
};

export const formatPrice = (price, currency, exchangeRates) => {
  const convertedPrice = convertCurrency(price, currency, exchangeRates).toFixed(0);
  const regexp = /\B(?=(\d{3})+(?!\d))/g;

  switch (currency) {
    case 'RUB': return `${convertedPrice} ₽`.replace(regexp, ' ');
    case 'USD': return `${convertedPrice} $`.replace(regexp, ' ');
    case 'EUR': return `${convertedPrice} €`.replace(regexp, ' ');
    default: return convertedPrice;
  }
};
