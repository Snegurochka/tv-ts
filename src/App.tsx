// Routing and Store
import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkUserSession } from './store/user/user.action';

// const
import { AppRoute } from './const';

// Components
import Home from './pages/Home/Home';
import Movie from './pages/Movie/Movie';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Authentication from './pages/Authentication/Authentication';
import Catalog from './pages/Catalog/Catalog';
import WatchList from './pages/WatchList/WatchList';
import { selectCurrentUser } from './store/user/user.selector';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return <Switch>
    <Route path={AppRoute.HOME} exact component={Home} />
    <Route path={AppRoute.LOGIN} exact component={Authentication} />
    {/* <PrivateRoute
      exact
      path={AppRoute.WATCH_LIST}
      isAuth={user ? true : false}
      render={() => <WatchList />}
    >
    </PrivateRoute> */}
    <Route
      path={AppRoute.CATALOG}
      component={Catalog}
    />
    <Route path='/:movieId' component={Movie} />
    <Route path='/*' component={NotFound} />
  </Switch>
};

export default App;
