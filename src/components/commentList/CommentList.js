import React from 'react';
import SingleComment from './../singleComment/SingleComment';
import CommentListContainer from './commentListStyles';
import MainContainer from './mainContainer';
import { connect } from 'react-redux';
import { fetchComments } from '../../redux/comments/commentsActions';

class CommentList extends React.Component {
  componentDidMount() {
    const { fetchComments } = this.props;
    fetchComments();
  }
  render() {
    const { comments } = this.props;
    return (
      <MainContainer>
        <CommentListContainer>
          {comments &&
            comments.length > 0 &&
            comments.map(el => (
              <SingleComment
                title={el.title}
                email={el.email}
                content={el.body}
                key={el.id}
              />
            ))}
        </CommentListContainer>
      </MainContainer>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: () => dispatch(fetchComments())
  };
};

const mapStateToProps = ({ comments }) => {
  return comments;
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
