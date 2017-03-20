import { connect } from 'react-redux';
import StudySetForm from './study_set_form';
import { fetchStudySets, fetchStudySet, createStudySet, 
	updateStudySet } from '../../actions/study_set_actions';
import { createCard, updateCard } from '../../util/cards_api_util';

const newCards = () => {
	const cards = [];
	for (let i = 0; i < 5; i++) {
		cards.push({term: "", definition: ""});
	}
	return cards;
};

const mapStateToProps = (state, ownProps) => {

	let studySet = {title: "", description: "", user_id: state.session.currentUser.id};
	let formType = 'new';
	let cards = newCards();
	if (ownProps.params.studySetId) {
		studySet = state.studySet;
		formType = 'edit';
	}
	return {
		currentUser: state.session.currentUser,
		studySet,
		cards,
		formType
	};

};

const mapDispatchToProps = (dispatch, ownProps) => {
	let submitStudySet = (ownProps.params.studySetId) ? updateStudySet : createStudySet;
	let submitCard = (ownProps.params.studySetId) ? updateCard : createCard;
	return {
		fetchStudySets: () => dispatch(fetchStudySets()),
		fetchStudySet: (id) => dispatch(fetchStudySet(id)),
		createStudySet: (studySet) => dispatch(createStudySet(studySet)),
		createCard: (card) => createCard(card)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StudySetForm);