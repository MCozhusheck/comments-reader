import React from 'react';
import styled from 'styled-components';
import SingleCommentContainer from './singleCommentStyles';
import { connect } from 'react-redux';
import { addToFav } from './../../redux/comments/commentsActions';

const Title = styled.h3`
  color: red;
`;
const Email = styled.p`
  color: blue;
`;
const Content = styled.p`
  color: green;
`;

const SingleComment = ({ data, addToFav }) => {
  return (
    <SingleCommentContainer>
      <Title>{data.title}</Title>
      <Email>{data.email}</Email>
      <Content>{data.content}</Content>
      {data.isFav ? (
        <p>Favourite comment</p>
      ) : (
        <button
          onClick={() => {
            addToFav(data);
          }}
        >
          Add to favourite
        </button>
      )}
    </SingleCommentContainer>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToFav: id => dispatch(addToFav(id))
  };
};

export default connect(null, mapDispatchToProps)(SingleComment);
