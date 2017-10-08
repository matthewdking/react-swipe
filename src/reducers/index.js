import { combineReducers } from 'redux';
import MentorsReducer from './mentors.reducer';

const rootReducers = combineReducers({
  mentors: MentorsReducer
});

export default rootReducers;
