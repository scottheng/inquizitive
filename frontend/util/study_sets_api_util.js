export const fetchStudySets = (userId) => (
	$.ajax({
		method: 'GET',
		url: 'api/study_sets',
		data: {user_id: userId}
	})
);

