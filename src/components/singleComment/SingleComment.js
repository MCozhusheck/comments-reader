import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  color: red;
`;
const CommentContainer = styled.div`
  border: 1px solid black;
`;
const Email = styled.p`
  color: blue;
`;
const Content = styled.p`
  color: green;
`;

const SingleComment = ({ title, email, content }) => {
  return (
    <CommentContainer>
      <Title>{title}</Title>
      <Email>{email}</Email>
      <Content>{content}</Content>
    </CommentContainer>
  );
};

export default SingleComment;
