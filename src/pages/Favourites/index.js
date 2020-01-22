import React from 'react';
import { CommentList } from '../../components';
import { connect } from 'react-redux';
// import { fetchCommentsIfNeeded } from '../../redux/comments/commentsActions';

class Favourites extends React.Component {
  // componentDidMount() {
  //   const { fetchCommentsIfNeeded } = this.props;
  //   fetchCommentsIfNeeded();
  // }
  render() {
    const { favComments } = this.props;
    return (
      <>
        <h1>Home</h1>
        <CommentList comments={favComments} />
      </>
    );
  }
}

const mapStateToProps = ({ favComments }) => {
  return favComments;
};

export default connect(mapStateToProps)(Favourites);
