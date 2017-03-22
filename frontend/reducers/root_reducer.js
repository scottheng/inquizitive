import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import StudySetsReducer from './study_sets_reducer';
import StudySetReducer from './study_set_details_reducer';
import FoldersReducer from './folder_reducer';

const rootReducer = combineReducers({
	session: SessionReducer,
	studySets: StudySetsReducer,
	studySet: StudySetReducer,
	folders: FoldersReducer
});

export default rootReducer;