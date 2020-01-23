import React from 'react';
import styled from 'styled-components';
import SingleCommentContainer from './singleCommentStyles';
import { connect } from 'react-redux';
import {
  addToFav,
  removeFromFav
} from './../../redux/comments/commentsActions';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

const Title = styled.h3`
  color: red;
`;
const Email = styled.p`
  color: blue;
`;
const Content = styled.p`
  color: green;
`;

const SingleComment = ({ data, addToFav, removeFromFav, match }) => {
  const isInFavPath = match.path === '/favourites';
  const renderButton = () => {
    if (data.isFav) {
      if (isInFavPath) {
        return (
          <button onClick={() => removeFromFav(data)}>Usuń z ulubionych</button>
        );
      } else {
        return <p>Polubiono</p>;
      }
    } else {
      return (
        <button onClick={() => addToFav(data)}>Dodaj do ulubionych</button>
      );
    }
  };
  return (
    <SingleCommentContainer>
      <Title>{data.title}</Title>
      <Email>{data.email}</Email>
      <Content>{data.content}</Content>
      {renderButton()}
    </SingleCommentContainer>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToFav: comment => dispatch(addToFav(comment)),
    removeFromFav: comment => dispatch(removeFromFav(comment))
  };
};

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(SingleComment);
