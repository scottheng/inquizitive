export const fetchStudySets = (userId) => (
	$.ajax({
		method: 'GET',
		url: 'api/study_sets',
		data: {user_id: userId}
	})
);

export const fetchStudySet = (id) => (
	$.ajax({
		method: 'GET',
		url: `api/study_sets/${id}`
	})
);

export const createStudySet = (studySet) => (
	$.ajax({
		method: 'POST',
		url: `api/study_sets`,
		data: {study_set: studySet}
	})
);

export const updateStudySet = (studySet) => (
	$.ajax({
		method: 'PATCH',
		url: `api/study_sets/${studySet.id}`,
		data: {study_set: studySet}
	})
);

export const deleteStudySet = (id) => (
	$.ajax({
		method: 'DELETE',
		url :`api/study_sets/${id}`
	})
);

