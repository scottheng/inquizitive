import { connect } from 'react-redux';
import FolderIndex from './folder_index';
import { fetchFolders } from '../../actions/folder_actions';
import lodash from 'lodash';

const mapStateToProps = state => ({
	currentUser: state.session.currentUser,
	folders: lodash.values(state.studySets)
});

const mapDispatchToProps = dispatch => ({
	fetchFolders: (userId) => dispatch(fetchFolders(userId))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FolderIndex);