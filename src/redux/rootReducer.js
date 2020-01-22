import { combineReducers } from 'redux';
import commentsReducer from './comments/commentsReducer';
import favCommentsReducer from './favComments/favCommentsReducer';

const rootReducer = combineReducers({
  comments: commentsReducer,
  favComments: favCommentsReducer
});

export default rootReducer;
