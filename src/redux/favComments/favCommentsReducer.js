import { ADD_COMMENT_TO_FAV } from './favCommentTypes';

const initialState = {
  favComments: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT_TO_FAV:
      return {
        ...state,
        favComments: [...state.favComments, action.payload]
      };
    default:
      return state;
  }
};

export default reducer;
