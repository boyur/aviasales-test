import React from 'react';
import './App.scss';

import Header from '../Header';
import SettingsPanel from '../SettingsPanel';
import TicketsList from '../TicketsList';

const App = () => (
  <>
    <Header />
    <div className="layout">
      <SettingsPanel />
      <TicketsList />
    </div>
  </>
);

export default App;
