import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import UniversitiesReducer from './university_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  universities: UniversitiesReducer
});

export default RootReducer;
