import { ADD_COMMENT_TO_FAV } from './favCommentTypes';

export const addToFav = id => {
  return {
    type: ADD_COMMENT_TO_FAV,
    payload: id
  };
};
