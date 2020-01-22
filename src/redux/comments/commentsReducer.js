import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  MARK_COMMENT_AS_FAV
} from './commentTypes';

const initialState = {
  loading: false,
  comments: [],
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload,
        error: ''
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        comments: [],
        error: action.payload
      };
    case MARK_COMMENT_AS_FAV:
      console.log('MARK_COMMENT_AS_FAV: ', action.payload);
      //const likedComment = {...action.payload, action.payload.isFav: true};
      action.payload.isFav = true;
      const index = state.comments.findIndex(el => el.id === action.payload.id);
      const newComments = Object.assign(state.comments);
      newComments[index] = action.payload;
      return {
        ...state,
        comments: newComments
      };
    default:
      return state;
  }
};

export default reducer;
