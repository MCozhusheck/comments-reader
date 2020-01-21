import React from 'react';
import SingleCommnet from './../singleComment/SingleComment';

const URL = 'http://jsonplaceholder.typicode.com/comments';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      comments: null
    };
  }
  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(
        res =>
          this.setState({
            comments: res
              .filter(element => element.id <= 20)
              .map(el => {
                return {
                  title: el.name,
                  email: el.email,
                  body: el.body.slice(0, 20)
                };
              }),
            isLoaded: true
          }),
        error => {
          this.setState({ error });
        }
      );
  }
  render() {
    return (
      <div>
        Comments lists
        <SingleCommnet
          title={'some title'}
          email={'random email'}
          content={'lorem ipsum'}
        />
      </div>
    );
  }
}

export default CommentList;
