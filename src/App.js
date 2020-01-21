import React from 'react';
import './App.css';
import CommentList from './components/commentList/CommentList';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    background-color: yellow;
  }
`;

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
