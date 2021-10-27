import React from 'react';
import { Provider, shallowEqual, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import {
  BrowserRouter, Route, Switch, Router,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import JwtProvider from 'app/components/auth/JwtProvider';
import PublicRoutes from 'app/routes/PublicRoutes';
import PrivateRoutes from 'app/routes/PrivateRoutes';
import { store, persistor } from 'utils/redux/store';
import Loading from './components/Loading';

const history = createBrowserHistory();

const App: React.FC = () => {
  // const isAuthorized = useSelector<RootState>(
  //   // ({ auth }) => auth.accessToken,
  //   ({ auth }) => auth.user,
  //   shallowEqual,
  // );
  const isAuthorized = false;

  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <Router history={history}>
          <JwtProvider>
            <BrowserRouter>
              <Switch>
                {/* <Route path="/logout" component={Logout} /> */}
                {!isAuthorized ? (
                  <Route>
                    <PublicRoutes />
                  </Route>
                ) : (
                  <>
                    {/* <MasterLayout> */}
                    <PrivateRoutes />
                    {/* </MasterLayout> */}
                  </>
                )}
              </Switch>
            </BrowserRouter>
          </JwtProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
