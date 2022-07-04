// Routing and Store
import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkUserSession } from './store/user/user.action';

// const
import { AppRoute, AuthorizationStatus } from './const';

// Components
import Home from './pages/Home/Home';
import Movie from './pages/Movie/Movie';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Authentication from './pages/Authentication/Authentication';
import Catalog from './pages/Catalog/Catalog';
import WatchList from './pages/WatchList/WatchList';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    checkUserSession();
  }, [dispatch]);

  return <Switch>
    <Route path={AppRoute.HOME} exact component={Home} />
    <Route path={AppRoute.LOGIN} exact component={Authentication} />
    <PrivateRoute
      exact
      path={AppRoute.WATCH_LIST}
      authorizationStatus={AuthorizationStatus.Auth}
      render={() => <WatchList />}
    >
    </PrivateRoute>
    <Route
      path={AppRoute.CATALOG}
      component={Catalog}
    />
    <Route path='/:movieId' component={Movie} />
    <Route path='/*' component={NotFound} />
  </Switch>
};

export default App;
