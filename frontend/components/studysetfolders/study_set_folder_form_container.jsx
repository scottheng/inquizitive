import { connect } from 'react-redux';
import StudySetFolderForm from './study_set_folder_form';
import * as StudySetFoldersAPIUtil from '../../util/study_set_folders_api_util';
import { fetchFolders, fetchFolder } from '../../actions/folder_actions';
import { fetchStudySets, fetchStudySet } from '../../actions/study_set_actions';
import lodash from 'lodash';

const mapStateToProps = (state, ownProps) => {
	const studySetFolderItems = ownProps.params.folderId ? state.studySets : state.folders;
	const receiver = ownProps.params.folderId ? state.folder : state.studySet;

	return {
		currentUser: state.session.currentUser,
		studySetFolderItems: lodash.values(studySetFolderItems),
		receiver,
		createStudySetFolder: (studySetFolder) => StudySetFoldersAPIUtil.createStudySetFolder(studySetFolder),
		removeStudySetFolder: (studySetFolder) => StudySetFoldersAPIUtil.removeStudySetFolder(studySetFolder)
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const fetchItems = ownProps.params.folderId ? fetchStudySets : fetchFolders;
	const fetchReceiver = ownProps.params.folderId ? fetchFolder : fetchStudySet;

	return {
		fetchItems: (userId) => dispatch(fetchItems(userId)),
		fetchReceiver: (id) => dispatch(fetchReceiver(id))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StudySetFolderForm);
