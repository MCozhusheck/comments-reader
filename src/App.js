import React from 'react';
import './App.css';
import axios from 'axios';
import CommentList from './components/commentList/CommentList';

class App extends React.Component {
  render() {
    return (
      <div>
        <CommentList />
      </div>
    );
  }
}

export default App;
