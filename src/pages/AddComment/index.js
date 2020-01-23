import React from 'react';
import { AddCommentForm } from '../../components';
import { connect } from 'react-redux';
import { fetchCommentsIfNeeded } from '../../redux/comments/commentsActions';

class AddComment extends React.Component {
  componentDidMount() {
    const { fetchCommentsIfNeeded } = this.props;
    fetchCommentsIfNeeded();
  }
  render() {
    return <AddCommentForm />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCommentsIfNeeded: () => dispatch(fetchCommentsIfNeeded())
  };
};

export default connect(null, mapDispatchToProps)(AddComment);
