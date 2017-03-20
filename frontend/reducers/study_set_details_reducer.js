import { RECEIVE_STUDY_SET, 
	RECEIVE_NEW_STUDY_SET } from '../actions/study_set_actions';
import merge from 'lodash/merge';

const defaultState = {
	title: "",
	description: "",
	cards: []
};

const StudySetReducer = (state = defaultState, action) => {
	Object.freeze(state);
	switch(action.type) {
		case RECEIVE_NEW_STUDY_SET:
		case RECEIVE_STUDY_SET:
			return merge({}, action.studySet);
		default:
			return state;
	}
};

export default StudySetReducer;