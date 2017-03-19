import { connect } from 'react-redux';
import StudySetForm from './study_set_form';
import { fetchStudySet, createStudySet, 
	updateStudySet } from '../../actions/study_set_actions';
import { createCard, updateCard } from '../../util/cards_api_util';

const mapStateToProps = (state, ownProps) => {

	let studySet = {title: "", description: "", user_id: state.session.currentUser.id};
	let formType = 'new';
	if (ownProps.params.studySetId) {
		studySet = state.studySets[ownProps.params.studySetId];
		formType = 'edit';
	}
	return {
		currentUser: state.session.currentUser,
		studySet,
		formType
	};

};

const mapDispatchToProps = (dispatch, ownProps) => {
	let submitStudySet = (ownProps.params.studySetId) ? updateStudySet : createStudySet;
	let submitCard = (ownProps.params.studySetId) ? updateCard : createCard;
	return {
		fetchStudySet: (id) => dispatch(fetchStudySet(id)),
		submitStudySet: (studySet) => dispatch(submitStudySet(studySet)),
		submitCard: (card) => dispatch(submitCard(card))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StudySetForm);