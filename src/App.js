import React from 'react';
import CommentList from './components/commentList/CommentList';
import GlobalStyles from './defaultStyles';

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <CommentList />
      </>
    );
  }
}

export default App;
