import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE
} from './commentTypes';
import axios from 'axios';

const URL = 'http://jsonplaceholder.typicode.com/comments';

export const fetchCommentsRequest = () => {
  return {
    type: FETCH_COMMENTS_REQUEST
  };
};

export const fetchCommentsSuccess = comments => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments
  };
};

export const fetchCommentsFailure = error => {
  return {
    type: FETCH_COMMENTS_FAILURE,
    payload: error
  };
};

export const fetchComments = () => {
  return dispatch => {
    dispatch(fetchCommentsRequest);
    axios
      .get(URL)
      .then(res => {
        const comments = res.data;
        dispatch(fetchCommentsSuccess(comments));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchCommentsFailure(errorMsg));
      });
  };
};
