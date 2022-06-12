// Routing and Store
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

// Styles and const
import { GlobalStyle } from './GlobalStyle';
import { AppRoute, AuthorizationStatus } from './const';

// Components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Movie from './components/Movie/Movie';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Authentication from './components/Authentication/Authentication';
import Catalog from './components/Catalog/Catalog';


const App: React.FC = () => (
  <Provider store={store} >
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={AppRoute.HOME} exact component={Home} />
        <Route path={AppRoute.LOGIN} exact component={Authentication} />
        <PrivateRoute
          exact
          path={AppRoute.LOGIN}
          authorizationStatus={AuthorizationStatus.NoAuth}
          render={() => <Authentication />}
        >
        </PrivateRoute>
        <Route
                path={AppRoute.CATALOG}
                component={Catalog}
            />
        <Route path='/:movieId' component={Movie} />
        <Route path='/*' component={NotFound} />
      </Switch>

      <GlobalStyle />
    </BrowserRouter>
  </Provider>
);


export default App;
