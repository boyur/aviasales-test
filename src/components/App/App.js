import React, { PureComponent } from 'react';
import urls from 'configs/urls';
import { getFiltredTickets } from 'utils';
import './App.scss';

import Header from 'components/Header';
import SettingsPanel from 'components/SettingsPanel';
import TicketsList from 'components/TicketsList';
import filterConfig from "../../configs/filter";

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
    this.setState( { currency });
  };

  handleChangeFilter = (e) => {
    const { id } = e.target;
    const { filter } = this.state;

    if (id === 'all') {
      const isAll = filter.length === filterConfig.length;
      this.setState({ filter: isAll ? [] : [0, 1, 2, 3] });
    } else {
      const stops = parseInt(id, 10);
      const index = filter.findIndex(item => item === stops);

      if (index === -1) {
        filter.push(stops);
      } else {
        filter.splice(index, 1);
      }

      this.setState({ filter: [...filter] });
    }
  };

  setOneFilter = (e) => {
    e.stopPropagation();
    const { id } = e.target;
    this.setState({ filter: [parseInt(id, 10)] });
  };

  render() {
    const { filter, currency, exchangeRates } = this.state;

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
            exchangeRates={exchangeRates}
          />
        </div>
      </div>
    );
  }
}

export default App;
