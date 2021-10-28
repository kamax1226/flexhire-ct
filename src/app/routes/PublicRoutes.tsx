import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from 'app/pages/auth/Login';
import Loading from 'app/components/Loading';

// eslint-disable-next-line
const PublicRoutes: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/auth" component={Login} />
        <Redirect to="/auth" />
      </Switch>
    </Suspense>
  );
};

export default PublicRoutes;
