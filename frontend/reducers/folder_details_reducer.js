import { RECEIVE_FOLDER,
	RECEIVE_NEW_FOLDER } from '../actions/folder_actions';
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
		default:
			return state;
	}
};

export default FolderReducer;