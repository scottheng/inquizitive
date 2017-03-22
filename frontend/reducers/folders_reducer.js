import { RECEIVE_FOLDERS, RECEIVE_NEW_FOLDER } from '../actions/folder_actions';
import merge from 'lodash/merge';

const FoldersReducer = (state = {}, action) => {
	Object.freeze(state);
	let newState;
	switch(action.type) {
		case RECEIVE_FOLDERS:
			return merge({}, action.folders);
		case RECEIVE_NEW_FOLDER:
			newState = merge({}, state);
			newState[action.folder.id] = action.folder;
			return newState;
		default:
			return state;
	}
};

export default FoldersReducer;