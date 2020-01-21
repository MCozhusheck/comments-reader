import React from 'react';

const SingleComment = ({ title, email, content }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{email}</p>
      <p>{content}</p>
    </div>
  );
};

export default SingleComment;
