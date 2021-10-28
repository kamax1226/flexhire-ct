import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from 'app/pages/auth/Login';
import Loading from 'app/components/Loading';

export default function PublicRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/auth" component={Login} />
        <Redirect to="/auth" />
      </Switch>
    </Suspense>
  );
}
