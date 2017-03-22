import * as FoldersAPIUtil from '../util/folders_api_util';

export const RECEIVE_FOLDERS = 'RECEIVE_FOLDERS';
export const RECEIVE_FOLDER = 'RECEIVE_FOLDER';
export const RECEIVE_NEW_FOLDER = 'RECEIVE_NEW_FOLDER';
export const RECEIVE_FOLDER_ERRORS = 'RECEIVE_FOLDER_ERRORS';
export const REMOVE_FOLDER = 'REMOVE_FOLDER';

export const receiveFolders = (folders) => ({
	type: RECEIVE_FOLDERS,
	folders
});

export const receiveFolder = (folder) => ({
	type: RECEIVE_FOLDER,
	folder
});

export const receiveNewFolder = (newFolder) => ({
	type: RECEIVE_NEW_FOLDER,
	newFolder
});

export const removeFolder = (folder) => ({
	type: REMOVE_FOLDER,
	folder
});

export const receiveFolderErrors = (errors) => ({
	type: RECEIVE_FOLDER_ERRORS,
	errors
});

export const fetchFolders = (userId) => dispatch => (
	FoldersAPIUtil.fetchFolders(userId)
		.then(folders => dispatch(receiveFolders(folders)))
);

export const fetchFolder = (id) => dispatch => (
	FoldersAPIUtil.fetchFolder(id)
		.then(folder => dispatch(receiveFolder(folder)))
);

export const createFolder = (folder) => dispatch => (
	FoldersAPIUtil.createFolder(folder)
		.then(newFolder => dispatch(receiveFolder(newFolder)))
		.fail(errors => dispatch(receiveFolderErrors(errors)))
);

export const deleteFolder = (id) => dispatch => (
	FoldersAPIUtil.deleteFolder(id)
		.then(deletedFolder => dispatch(removeFolder(deletedFolder)))
);