import React from 'react';
import { Home, Favourites, AddComment } from './pages';
import GlobalStyles from './defaultStyles';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favourites">Favourite comments</Link>
            </li>
            <li>
              <Link to="/add-comment">Add comment</Link>
            </li>
          </ul>
          <GlobalStyles />

          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/favourites">
              <Favourites />
            </Route>
            <Route parh="/add-comment">
              <AddComment />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
