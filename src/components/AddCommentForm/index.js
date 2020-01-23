import React from 'react';
import AddCommentContainer from './StyledAddComment';

class AddCommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
      emailValue: '',
      titleValue: '',
      contentValue: ''
    };
  }
  handleTitleChange = event => {
    this.setState({ titleValue: event.target.value });
  };
  handleContentChange = event => {
    this.setState({ contentValue: event.target.value });
  };
  handleEmailChange = event => {
    this.setState({ emailValue: event.target.value });
  };
  isTitleValid = () => {
    const re = /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,}$/;
    return re.test(this.state.titleValue);
  };
  isEmailValid = () => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this.state.emailValue);
  };
  isContentValid = () => {
    const re = /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9\s]{2,}$/;
    return re.test(this.state.contentValue);
  };
  handleSubmit = e => {
    console.log('hello');
    e.preventDefault();
    if (this.isTitleValid() && this.isEmailValid() && this.isContentValid()) {
      this.setState({ isValid: true }, () => console.log(this.state.isValid));
    }
  };
  render() {
    return (
      <AddCommentContainer>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={e => this.handleTitleChange(e)}
              onBlur={() => this.isTitleValid()}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={e => this.handleEmailChange(e)}
              onBlur={() => this.isEmailValid()}
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Comment content:</label>
            <textarea
              id="content"
              onChange={e => this.handleContentChange(e)}
              onBlur={() => this.isContentValid()}
            />
          </div>
          <input type="submit" value="Dodaj komentarz"></input>
        </form>
      </AddCommentContainer>
    );
  }
}

export default AddCommentForm;
