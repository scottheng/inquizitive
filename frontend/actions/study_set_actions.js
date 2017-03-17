import * as StudySetsAPIUtil from '../util/study_sets_api_util';

export const RECEIVE_STUDY_SETS = 'RECEIVE_STUDY_SETS';
export const RECEIVE_STUDY_SET = 'RECEIVE_STUDY_SET';
export const RECEIVE_NEW_STUDY_SET = 'RECEIVE_NEW_STUDY_SET';
export const RECEIVE_STUDY_SET_ERRORS = 'RECEIVE_STUDY_SET_ERRORS';

export const receiveStudySets = (studySets) => ({
	type: RECEIVE_STUDY_SETS,
	studySets
});

export const receiveStudySet = (studySet) => ({
	type: RECEIVE_STUDY_SET,
	studySet
});

export const receiveNewStudySet = (newStudySet) => ({
	type: RECEIVE_NEW_STUDY_SET,
	newStudySet
});

export const receiveStudySetErrors = (errors) => ({
	type: RECEIVE_STUDY_SET_ERRORS,
	errors
});

export const fetchStudySets = (userId) => dispatch => (
	StudySetsAPIUtil.fetchStudySets(userId)
		.then(studySets => dispatch(receiveStudySets(studySets)))
);

export const fetchStudySet = (id) => dispatch => (
	StudySetsAPIUtil.fetchStudySet(id)
		.then(studySet => dispatch(receiveStudySet(studySet)))
);

export const createStudySet = (studySet) => dispatch => (
	StudySetsAPIUtil.createStudySet(studySet)
		.then(newStudySet => dispatch(receiveStudySet(newStudySet)))
		.fail(errors => dispatch(receiveStudySetErrors(errors)))
);

export const updateStudySet = (studySet) => dispatch => (
	StudySetsAPIUtil.updateStudySet(studySet)
		.then(updatedStudySet => dispatch(receiveStudySet(updatedStudySet)))
);