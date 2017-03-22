export const createStudySetFolder = (studySetFolder) => (
	$.ajax({
		method: 'POST',
		url: 'api/study_set_folders',
		data: {study_set_folder: studySetFolder}
	})
);

export const removeStudySetFolder = (studySetFolder) => (
	$.ajax({
		method: 'DELETE',
		url: 'api/study_set_folders',
		data: {study_set_folder: studySetFolder}
	})
);