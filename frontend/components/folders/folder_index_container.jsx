import { connect } from 'react-redux';
import FolderIndex from './folder_index';
import { fetchStudySets } from '../../actions/study_set_actions';
import { fetchFolders } from '../../actions/folder_actions';
import lodash from 'lodash';

const mapStateToProps = state => ({
	currentUser: state.session.currentUser,
	folders: lodash.values(state.folders),
	studySetsCount: lodash.values(state.studySets).length,
	foldersCount: lodash.values(state.folders).length
});

const mapDispatchToProps = dispatch => ({
	fetchFolders: (userId) => dispatch(fetchFolders(userId)),
	fetchStudySets: (userId) => dispatch(fetchStudySets(userId))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FolderIndex);