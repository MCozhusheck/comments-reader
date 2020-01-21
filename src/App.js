import React from 'react';
import CommentList from './components/commentList/CommentList';
import GlobalStyles from './defaultStyles';
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyles />
        <CommentList />
      </Provider>
    );
  }
}

export default App;
