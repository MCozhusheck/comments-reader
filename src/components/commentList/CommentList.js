import React from 'react';
import SingleCommnet from './../singleComment/SingleComment';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }
  render() {
    return (
      <div>
        Comments lists
        <SingleCommnet />
      </div>
    );
  }
}

export default CommentList;
