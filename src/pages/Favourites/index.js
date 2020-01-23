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
    const favComments = this.props.comments.filter(el => el.isFav);
    return (
      <>
        <h1>Favourites</h1>
        <CommentList comments={favComments} />
      </>
    );
  }
}

const mapStateToProps = ({ comments }) => {
  return comments;
};

export default connect(mapStateToProps)(Favourites);
