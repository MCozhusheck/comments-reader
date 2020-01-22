import React, { useState } from 'react';
import styled from 'styled-components';
import SingleCommentContainer from './singleCommentStyles';
import { connect } from 'react-redux';
import { addToFav } from './../../redux/favComments/favCommentsActions';

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
  const [like, setLike] = useState(false);
  return (
    <SingleCommentContainer>
      <Title>{data.title}</Title>
      <Email>{data.email}</Email>
      <Content>{data.content}</Content>
      {like ? (
        <button>Remove from favourite</button>
      ) : (
        <button
          onClick={() => {
            setLike(true);
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
