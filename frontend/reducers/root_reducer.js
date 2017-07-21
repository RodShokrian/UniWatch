import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import UniversitiesReducer from './university_reducer';
import NewsReducer from './news_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  universities: UniversitiesReducer,
  news: NewsReducer
});

export default RootReducer;
