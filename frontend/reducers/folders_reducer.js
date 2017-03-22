import { RECEIVE_FOLDERS, RECEIVE_FOLDER, 
	RECEIVE_NEW_FOLDER, REMOVE_FOLDER } from '../actions/folder_actions';
import merge from 'lodash/merge';

const FoldersReducer = (state = {}, action) => {
	Object.freeze(state);
	let newState;
	switch(action.type) {
		case RECEIVE_FOLDERS:
			return merge({}, action.folders);
		case RECEIVE_FOLDER:
			return merge({}, state, {[action.folder.id]: action.folder});
		case RECEIVE_NEW_FOLDER:
			newState = merge({}, state);
			newState[action.folder.id] = action.folder;
			return newState;
		case REMOVE_FOLDER:
			newState = merge({}, state);
			delete newState[action.folder.id];
			return newState;
		default:
			return state;
	}
};

export default FoldersReducer;