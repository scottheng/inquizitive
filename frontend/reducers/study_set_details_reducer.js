import { RECEIVE_STUDY_SET } from '../actions/study_set_actions';
import merge from 'lodash/merge';

const StudySetReducer = (state = {}, action) => {
	Object.freeze(state);
	switch(action.type) {
		case RECEIVE_STUDY_SET:
			return merge({}, action.studySet);
		default:
			return state;
	}
};

export default StudySetReducer;