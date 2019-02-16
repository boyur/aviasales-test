import React, { PureComponent } from 'react';
import urls from '../../configs/urls';
import './App.scss';

import Header from '../Header';
import SettingsPanel from '../SettingsPanel';
import TicketsList from '../TicketsList';

class App extends PureComponent {
  state = {
    tickets: null,
  };

  componentDidMount() {
    fetch(urls.tickets)
      .then(response => response.json())
      .then(({ tickets }) => {
        this.setState({ tickets });
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
