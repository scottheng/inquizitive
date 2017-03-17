import { RECEIVE_STUDY_SETS } from '../actions/study_set_actions';
import merge from 'lodash/merge';

const StudySetsReducer = (state = {}, action) => {
	Object.freeze(state);
	switch(action.type) {
		case RECEIVE_STUDY_SETS:
			return merge({}, action.studySets);
		default:
			return state;
	}
};

export default StudySetsReducer;