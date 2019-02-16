import React, { PureComponent } from 'react';
import urls from 'configs/urls';
import './App.scss';

import Header from 'components/Header';
import SettingsPanel from 'components/SettingsPanel';
import TicketsList from 'components/TicketsList';

class App extends PureComponent {
  state = {
    tickets: null,
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
  }

  render() {
    const { tickets } = this.state;

    return (
      <>
        <Header />
        <div className="layout">
          {
            tickets ? (
              <>
                <SettingsPanel />
                <TicketsList tickets={tickets} />
              </>
            ) : 'Loading...'
          }
        </div>
      </>
    );
  }
}

export default App;
