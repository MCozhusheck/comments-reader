let nextCommentID = 500;

export default content => ({
  type: 'ADD_COMMENT',
  payload: {
    id: ++nextCommentID,
    content
  }
})