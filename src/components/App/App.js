import React, { PureComponent } from 'react';
import urls from 'configs/urls';
import { formatPrice, getFiltredTickets } from 'utils';
import './App.scss';

import Header from 'components/Header';
import SettingsPanel from 'components/SettingsPanel';
import TicketsList from 'components/TicketsList';

class App extends PureComponent {
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
        const formattedTickets = sortedTickets.map(item => ({ ...item, ...formatPrice(item.price) }));

        this.setState({
          tickets: formattedTickets,
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
    this.setState( { currency });
  };

  handleChangeFilter = (filter) => {
    this.setState({ filter });
  };

  setOneFilter = (e) => {
    const { id } = e.target;
    this.setState({ filter: [parseInt(id, 10)] });
  };

  render() {
    const { filter, currency } = this.state;

    const tickets = getFiltredTickets(this.state.tickets, filter);

    return (
      <div className="layout">
        <Header />
        <div className="main">
          <SettingsPanel
            currency={currency}
            filter={filter}
            handleChangeCurrency={this.handleChangeCurrency}
            handleChangeFilter={this.handleChangeFilter}
            setOneFilter={this.setOneFilter}
          />
          <TicketsList
            tickets={tickets}
            currency={currency}
          />
        </div>
      </div>
    );
  }
}

export default App;
