import { connect } from 'react-redux';
import Sidebar from './sidebar';
import { fetchFolders } from '../../actions/folder_actions';
import lodash from 'lodash';

const mapStateToProps = (state) => ({
	currentUser: state.session.currentUser,
	folders: lodash.values(state.folders)
});

const mapDispatchToProps = dispatch => ({
	fetchFolders: (userId) => dispatch(fetchFolders(userId))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidebar);