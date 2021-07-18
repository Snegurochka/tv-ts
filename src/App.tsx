// Routing
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Styles
import { GlobalStyle } from './GlobalStyle';

// Components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Movie from './components/Movie/Movie';
import NotFound from './components/NotFound/NotFound';

const App: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/:movieId' component={Movie} />
      <Route path='/*' component={NotFound} />
    </Switch>

    <GlobalStyle />
  </BrowserRouter>
);


export default App;
