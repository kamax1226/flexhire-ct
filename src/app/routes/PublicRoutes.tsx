import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from 'app/pages/Login';

export default function PublicRoutes() {
  return (
    <Switch>
      <Route path="/auth" component={Login} />
      <Redirect to="/auth" />
    </Switch>
  );
}
