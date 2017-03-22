import { RECEIVE_FOLDER,
	RECEIVE_NEW_FOLDER, 
	RECEIVE_FOLDER_ERRORS } from '../actions/folder_actions';
import merge from 'lodash/merge';

const defaultState = {
	name: "",
	description: "",
	study_sets: [],
	errors: []
};

const FolderReducer = (state = defaultState, action) => {
	Object.freeze(state);
	switch(action.type) {
		case RECEIVE_NEW_FOLDER:
		case RECEIVE_FOLDER:
			return merge({}, action.folder);
		case RECEIVE_FOLDER_ERRORS:
			let errors = action.errors;
			return merge({}, defaultState, {errors});
		default:
			return state;
	}
};

export default FolderReducer;