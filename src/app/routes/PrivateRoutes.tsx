import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'app/components/Loading';
// import { LightDashboardWrapper } from 'app/pages/dashboards/light-dashboard';

export default function PrivateRoutes() {
  const DashboardWrapper = lazy(
    () => import('app/pages/dashboard'),
  );

  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/dashboard" component={DashboardWrapper} />
        {/* <Route path="/om" exact component={OrganizationManagement} />
        <Route path="/om/:id" exact component={DetailPage} />
        <Route path="/lgu" exact component={LocalGovernmentUnits} />
        <Route path="/lgu/:id" exact component={VaccinationCenter} />

        <Route path="/start" component={StartDashboardWrapper} />
        <Route path="/light" component={LightDashboardWrapper} />
        <Route path="/general" component={GeneralPageWrapper} />
        <Route path="/profile" component={ProfilePageWrapper} />
        <Route path="/menu-test" component={MenuTestPage} />
        <Route path="/docs" component={DocsPageWrapper} /> */}
        <Redirect from="/auth" to="/dashboard" />
        <Redirect exact from="/" to="/dashboard" />
        <Redirect to="dashboard" />
      </Switch>
    </Suspense>
  );
}
