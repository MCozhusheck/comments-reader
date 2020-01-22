import styled from 'styled-components';

const SingleCommentContainer = styled.div`
  flex-basis: calc(100% / 4 - 20px);
  padding: 20px;
  border: 1px solid black;
  margin: 10px;
  background: white;

  @media (max-width: 1200px) {
    flex-basis: calc(100% / 2 - 20px);
  }

  @media (max-width: 680px) {
    flex-basis: calc(100%);
  }
`;

export default SingleCommentContainer;
