import React from 'react';
import styled from 'styled-components';
import SingleCommentContainer from './singleCommentStyles';

const Title = styled.h3`
  color: red;
`;
const Email = styled.p`
  color: blue;
`;
const Content = styled.p`
  color: green;
`;

const SingleComment = ({ title, email, content }) => {
  return (
    <SingleCommentContainer>
      <Title>{title}</Title>
      <Email>{email}</Email>
      <Content>{content}</Content>
    </SingleCommentContainer>
  );
};

export default SingleComment;
