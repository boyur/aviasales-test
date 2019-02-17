import React, { Component } from 'react';
import urls from 'configs/urls';
import { formatPrice } from 'utils/currencies';
import './App.scss';

import Header from 'components/Header';
import SettingsPanel from 'components/SettingsPanel';
import TicketsList from 'components/TicketsList';

class App extends Component {
  state = {
    tickets: null,
    exchangeRates: null,
    currency: 'RUB',
    filter: [0, 1, 2],
  };

  componentDidMount() {
    fetch(urls.tickets)
      .then(response => response.json())
      .then(({ tickets }) => {
        const sortedTickets = tickets.sort((a, b) => a.price - b.price);

        this.setState({
          tickets: sortedTickets,
        });
      })
      .catch(error => console.log(error.message));

    fetch(urls.exchangeRates)
      .then(response => response.json())
      .then(({ rates }) => {
        this.setState({
          exchangeRates: rates,
        });
      })
      .catch(error => console.log(error.message));
  }

  handleChangeCurrency = (currency) => {
    this.setState({ currency });
  };

  handleChangeFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const {
      tickets, filter, currency, exchangeRates,
    } = this.state;

    const preparedTickets = tickets && tickets
      .filter(item => filter.includes(item.stops))
      .map(item => ({
        ...item,
        price: formatPrice(item.price, currency, exchangeRates),
      }));

    return (
      <>
        <Header />
        <div className="layout">
          {
            tickets ? (
              <>
                <SettingsPanel
                  currency={currency}
                  filter={filter}
                  handleChangeCurrency={this.handleChangeCurrency}
                  handleChangeFilter={this.handleChangeFilter}
                />
                <TicketsList tickets={preparedTickets} />
              </>
            ) : 'Loading...'
          }
        </div>
      </>
    );
  }
}

export default App;
