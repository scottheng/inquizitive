import { connect } from 'react-redux';
import User from './user';
import { fetchStudySets } from '../../actions/study_set_actions';
import lodash from 'lodash';

const mapStateToProps = state => ({
	currentUser: state.session.currentUser,
	studySets: lodash.values(state.studySets),
	studySetsCount: lodash.values(state.studySets).length
});

const mapDispatchToProps = dispatch => ({
	fetchStudySets: (userId) => dispatch(fetchStudySets(userId))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(User);