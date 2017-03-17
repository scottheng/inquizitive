import { connect } from 'react-redux';
import StudySetShow from './study_set_show';
import { fetchStudySet } from '../../actions/study_set_actions';

const mapStateToProps = (state) => ({
	currentUser: state.session.currentUser,
	studySet: state.studySet
});

const mapDispatchToProps = (dispatch) => ({
	fetchStudySet: (id) => dispatch(fetchStudySet(id))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StudySetShow);