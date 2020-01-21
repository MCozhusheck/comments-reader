import React from 'react';
import SingleComment from './../singleComment/SingleComment';
import CommentListContainer from './commentListStyles';
import MainContainer from './mainContainer';

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
                  body: el.body.slice(0, 20),
                  id: el.id
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
    const { comments } = this.state;
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

export default CommentList;
