
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import { Switch } from 'react-router';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import TablesBooking from './components/views/TablesBooking/TablesBooking';
import TablesBookingNew from './components/views/TablesBookingNew/TablesBookingNew';
import TablesEvents from './components/views/TablesEvents/TablesEvents';
import TablesEventsNew from './components/views/TablesEventsNew/TablesEventsNew';
import Waiter from './components/views/Waiter/WaiterContainer.js';
import WaiterOrder from './components/views/WaiterOrder/WaiterOrder';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';
import Kitchen from './components/views/Kitchen/Kitchen';
import { Provider } from 'react-redux';
import store from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333',
    },
    /*secondary: {
      main: '#11cb5f',
    },*/
  },
});

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter basename={'/panel'}>
          <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
              <MainLayout>
                <header className="App-header">
                </header>
                <Switch>
                  <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
                  <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
                  <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
                  <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={TablesBookingNew} />
                  <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={TablesBooking} />
                  <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={TablesEventsNew} />
                  <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component={TablesEvents} />
                  <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
                  <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={WaiterOrder} />
                  <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={WaiterOrderNew} />
                  <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />

                  {/*{routes.map(route => (
              <Route key={route.path} exact path = {`${process.env.PUBLIC_URL}${route.path}`} component={route.component} />
            ))}*/}
                </Switch>
              </MainLayout>
            </ThemeProvider>
          </StylesProvider>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
