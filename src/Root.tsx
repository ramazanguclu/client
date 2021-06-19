import React, { FC } from 'react';
import { Route, Switch } from 'react-router';

import Main from './screens/Main';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';

import PrivateRoot from './PrivateRoot';

const Root: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <PrivateRoot path="/dashboard">
        <Dashboard />
      </PrivateRoot>
    </Switch>
  );
};

export default Root;
