import { connect } from 'react-redux';
import FolderShow from './folder_show';
import { fetchFolder, deleteFolder,
		deleteStudySetFolder } from '../../actions/folder_actions';
import lodash from 'lodash';

const mapStateToProps = (state) => ({
	currentUser: state.session.currentUser,
	folder: state.folder
});

const mapDispatchToProps = (dispatch) => ({
	fetchFolder: (id) => dispatch(fetchFolder(id)),
	deleteFolder: (id) => dispatch(deleteFolder(id)),
	deleteStudySetFolder: (studySetFolder) => dispatch(deleteStudySetFolder(studySetFolder))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FolderShow);

