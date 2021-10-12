// Routing
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/login' exact component={Login} />
      <Route path='/:movieId' component={Movie} />
      <Route path='/*' component={NotFound} />
      <PrivateRoute
        exact
        path='/watchlist'
        authorizationStatus={AuthorizationStatus.NoAuth}
        render={() => <Login/>}
      >
      </PrivateRoute>
    </Switch>

    <GlobalStyle />
  </BrowserRouter>
);


export default App;
