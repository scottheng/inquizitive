import { connect } from 'react-redux';
import StudySetShow from './study_set_show';

const mapStateToProps = (state) => ({
	currentUser: state.session.currentUser
});

export default connect(
	mapStateToProps
)(StudySetShow);