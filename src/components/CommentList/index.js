import React from 'react';
import { SingleComment } from '../index';
import CommentListContainer from './commentListStyles';
import MainContainer from './mainContainer';

class CommentList extends React.Component {
  render() {
    const { comments } = this.props;
    return (
      <MainContainer>
        <CommentListContainer>
          {comments &&
            comments.length > 0 &&
            comments.map(el => (
              <SingleComment
                data={{
                  title: el.title,
                  email: el.email,
                  content: el.body.slice(0,20).concat('...'),
                  id: el.id,
                  isFav: el.isFav
                }}
                key={el.id}
              />
            ))}
        </CommentListContainer>
      </MainContainer>
    );
  }
}

export default CommentList;
