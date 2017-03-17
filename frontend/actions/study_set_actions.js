import * as StudySetsAPIUtil from '../util/study_sets_api_util';

export const RECEIVE_STUDY_SETS = 'RECEIVE_STUDY_SETS';
export const RECEIVE_STUDY_SET = 'RECEIVE_STUDY_SET';

export const receiveStudySets = (studySets) => ({
	type: RECEIVE_STUDY_SETS,
	studySets
});

export const receiveStudySet = (studySet) => ({
	type: RECEIVE_STUDY_SET,
	studySet
});

export const fetchStudySets = (userId) => dispatch => (
	StudySetsAPIUtil.fetchStudySets(userId)
		.then(studySets => dispatch(receiveStudySets(studySets)))
);

export const fetchStudySet = (id) => dispatch => (
	StudySetsAPIUtil.fetchStudySet(id)
		.then(studySet => dispatch(receiveStudySet(studySet)))
);