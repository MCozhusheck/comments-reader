import React from 'react';
import { Home, Favourites, AddComment } from './pages';
import GlobalStyles from './defaultStyles';
import { Provider } from 'react-redux';
import store from './redux/store';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
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
            <Route exact path="/" component={Home} />
            <Route exact path="/favourites" component={Favourites} />
            <Route exact parh="/add-comment" component={AddComment} />
            <Route component={() => <div>404 Not found </div>} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
