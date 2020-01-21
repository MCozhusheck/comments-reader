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
        const comments = res.data
          .filter(element => element.id <= 20)
          .map(el => {
            return {
              title: el.name,
              email: el.email,
              body: el.body.slice(0, 20),
              id: el.id
            };
          });
        dispatch(fetchCommentsSuccess(comments));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchCommentsFailure(errorMsg));
      });
  };
};
