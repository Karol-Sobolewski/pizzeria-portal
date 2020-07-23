
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { Switch } from 'react-router';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import TablesBooking from './components/views/TablesBooking/TablesBooking';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import TablesEvents from './components/views/TablesEvents/TablesEvents';
import TablesEventsNew from './components/views/TablesEventsNew/TablesEventsNew';
import Waiter from './components/views/Waiter/Waiter';
import WaiterOrder from './components/views/WaiterOrder/WaiterOrder';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';
import Kitchen from './components/views/Kitchen/Kitchen';
function App() {
  return (
    <div className="App">
      <BrowserRouter basename={'/panel'}>
        <MainLayout>
          <header className="App-header">
            <p>
          Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
          Learn React
            </a>
          </header>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
            <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
            <Route path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={TablesBooking} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={TablesBookingNew} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/event/:id`} component={TablesEvents} />
            <Route exact path={`${process.env.PUBLIC_URL}/tables/event/new`} component={TablesEventsNew} />
            <Route path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
            <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={WaiterOrder} />
            <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={WaiterOrderNew} />
            <Route path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
