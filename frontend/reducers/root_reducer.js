import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import UniversitiesReducer from './university_reducer';
import NewsReducer from './news_reducer';
import FollowsReducer from './follows_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  universities: UniversitiesReducer,
  news: NewsReducer,
  follows: FollowsReducer
});

export default RootReducer;
