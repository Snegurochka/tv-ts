// Routing and Store
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

// Styles and const
import { GlobalStyle } from './GlobalStyle';
import { AuthorizationStatus } from './const';

// Components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Movie from './components/Movie/Movie';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';


const App: React.FC = () => (
  <Provider store={store} >
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <PrivateRoute
          exact
          path='/watchlist'
          authorizationStatus={AuthorizationStatus.NoAuth}
          render={() => <Login />}
        >
        </PrivateRoute>
        <Route path='/:movieId' component={Movie} />
        <Route path='/*' component={NotFound} />
      </Switch>

      <GlobalStyle />
    </BrowserRouter>
  </Provider>
);


export default App;
