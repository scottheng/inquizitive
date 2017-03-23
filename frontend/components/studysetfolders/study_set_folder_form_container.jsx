import { connect } from 'react-redux';
import StudySetFolderForm from './study_set_folder_form';
import * as StudySetFoldersAPIUtil from '../../util/study_set_folders_api_util';
import { fetchFolders } from '../../actions/folder_actions';
import { fetchStudySets } from '../../actions/study_set_actions';
import lodash from 'lodash';

const mapStateToProps = (state, ownProps) => {

	const studySetFolderItems = ownProps.params.folderId ? state.studySets : state.folders;

	return {
		currentUser: state.session.currentUser,
		studySetFolderItems: lodash.values(studySetFolderItems),
		createStudySetFolder: (studySetFolder) => StudySetFoldersAPIUtil.createStudySetFolder(studySetFolder),
		removeStudySetFolder: (studySetFolder) => StudySetFoldersAPIUtil.removeStudySetFolder(studySetFolder)
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const fetchItems = ownProps.params.folderId ? fetchStudySets : fetchFolders;

	return {
		fetchItems: (id) => dispatch(fetchItems(id))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StudySetFolderForm);
