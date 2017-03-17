import * as StudySetSAPIUtil from '../util/study_sets_api_util';

export const RECEIVE_STUDY_SETS = 'RECEIVE_STUDY_SETS';

export const receiveStudySets = (studySets) => ({
	type: RECEIVE_STUDY_SETS,
	studySets
});

export const fetchStudySets = (userId) => dispatch => (
	StudySetSAPIUtil.fetchStudySets(userId)
		.then(studySets => dispatch(receiveStudySets(studySets)))
);