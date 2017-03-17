import { RECEIVE_STUDY_SETS, 
	RECEIVE_NEW_STUDY_SET } from '../actions/study_set_actions';
import merge from 'lodash/merge';

const StudySetsReducer = (state = {}, action) => {
	Object.freeze(state);
	let newState;
	switch(action.type) {
		case RECEIVE_STUDY_SETS:
			return merge({}, action.studySets);
		case RECEIVE_NEW_STUDY_SET:
			newState = merge({}, state);
			newState[action.studySet.id] = action.studySet;
			return newState;
		default:
			return state;
	}
};

export default StudySetsReducer;