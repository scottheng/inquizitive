import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import StudySetsReducer from './study_sets_reducer';

const rootReducer = combineReducers({
	session: SessionReducer,
	studySets: StudySetsReducer
});

export default rootReducer;