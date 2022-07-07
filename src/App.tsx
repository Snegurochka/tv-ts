// Routing and Store
import { FC, lazy, Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkUserSession } from './store/user/user.action';
import { selectCurrentUser } from './store/user/user.selector';

// const
import { AppRoute } from './const';

// Components
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

import { Spinner } from './components/Spinner/Spinner.styles';
import { fetchFavoritesStart } from './store/favorites/favorites.action';

const Home = lazy(() => import('./pages/Home/Home'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const Movie = lazy(() => import('./pages/Movie/Movie'));
const Authentication = lazy(() => import('./pages/Authentication/Authentication'));
const WatchList = lazy(() => import('./pages/WatchList/WatchList'));

const App: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  useEffect(() => {
    if (!user) return;
    dispatch(fetchFavoritesStart(user.id));
  }, [user]);

  return <Suspense fallback={<Spinner />}>
    <Switch>
      <Route path={AppRoute.HOME} exact component={Home} />
      <Route path={AppRoute.LOGIN} exact component={Authentication} />
      <PrivateRoute
        exact
        path={AppRoute.WATCH_LIST}
        isAuth={user ? true : false}
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
  </Suspense>
};

export default App;
