import { connect } from 'react-redux';
import FolderForm from './folder_form';
import { fetchFolder, createFolder, 
	updateFolder } from '../../actions/folder_actions';

const mapStateToProps = (state, ownProps) => {
	let folder = {name: "", description: "", user_id: state.session.currentUser.id};
	if (ownProps.formType === 'edit') {
		folder = state.folder;
	}

	return {
		currentUser: state.session.currentUser,
		formType: ownProps.formType,
		folder,
		errors: state.folder.errors
	};
}; 

const mapDispatchToProps = (dispatch, ownProps) => {
	const processForm = (ownProps.formType === 'new') ? createFolder : updateFolder;
	return {
		fetchFolder: (id) => dispatch(fetchFolder(id)),
		processForm: (folder) => dispatch(processForm(folder))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FolderForm);

