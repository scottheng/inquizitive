import { connect } from 'react-redux';
import FolderForm from './folder_form';
import { createFolder, updateFolder } from '../../actions/folder_actions';

const mapStateToProps = (state, ownProps) => ({
	currentUser: state.session.currentUser,
	formType: ownProps.formType,
	errors: state.folder.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
	const processForm = (ownProps.formType === 'new') ? createFolder : updateFolder;
	return {
		processForm: (folder) => dispatch(processForm(folder))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FolderForm);

