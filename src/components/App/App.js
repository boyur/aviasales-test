import React, { PureComponent } from 'react';
import urls from 'configs/urls';
import { formatPrice } from 'utils/currencies';
import './App.scss';

import Header from 'components/Header';
import SettingsPanel from 'components/SettingsPanel';
import TicketsList from 'components/TicketsList';

class App extends PureComponent {
  state = {
    tickets: null,
    exchangeRates: null,
    currency: 'RUB',
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
      .then(({ quotes }) => {
        this.setState({
          exchangeRates: quotes,
        });
      })
      .catch(error => console.log(error.message));
  }

  render() {
    const { tickets, currency, exchangeRates } = this.state;

    const convertedTickets = tickets && tickets.map(item => ({
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
                <SettingsPanel />
                <TicketsList tickets={convertedTickets} />
              </>
            ) : 'Loading...'
          }
        </div>
      </>
    );
  }
}

export default App;
