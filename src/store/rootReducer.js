import { combineReducers } from 'redux';

import post from './Post/reducers';
import author from './Author/reducers';

export default combineReducers({
  post,
  author,
});
