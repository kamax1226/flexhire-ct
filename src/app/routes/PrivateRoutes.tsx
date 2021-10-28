import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'app/components/Loading';

// eslint-disable-next-line
const PrivateRoutes: React.FC = () => {
  const DashboardWrapper = lazy(
    () => import('app/pages/dashboard'),
  );

  const JobsWrapper = lazy(
    () => import('app/pages/jobs'),
  );

  const ProfileWrapper = lazy(
    () => import('app/pages/profile'),
  );

  const QuestionsWrapper = lazy(
    () => import('app/pages/Questions'),
  );

  const CodetestWrapper = lazy(
    () => import('app/pages/CodeTest'),
  );

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/dashboard" exact component={DashboardWrapper} />
        <Route path="/jobs" exact component={JobsWrapper} />
        <Route path="/profile" exact component={ProfileWrapper} />
        <Route path="/questions" exact component={QuestionsWrapper} />
        <Route path="/codetest" exact component={CodetestWrapper} />
        <Redirect from="/auth" to="/dashboard" />
        <Redirect exact from="/" to="/dashboard" />
        <Redirect to="dashboard" />
      </Switch>
    </Suspense>
  );
};

export default PrivateRoutes;
