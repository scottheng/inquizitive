export const fetchFolders = (userId) => (
	$.ajax({
		method: 'GET',
		url: 'api/folders',
		data: {user_id: userId}
	})
);

export const fetchFolder = (id) => (
	$.ajax({
		method: 'GET',
		url: `api/folders/${id}`
	})
);

export const createFolder = (folder) => (
	$.ajax({
		method: 'POST',
		url: `api/folders`,
		data: {folder}
	})
);

export const updateFolder = (folder) => (
	$.ajax({
		method: 'PATCH',
		url: `api/folders/${folder.id}`,
		data: {folder}
	})
);

export const deleteFolder = (id) => (
	$.ajax({
		method: 'DELETE',
		url: `api/folders/${id}`,
	})
);