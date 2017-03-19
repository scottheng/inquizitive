export const fetchAllCards = () => (
	$.ajax({
		method: 'GET',
		url: 'api/cards'
	})
);

export const fetchUserCards = (userId) => (
	$.ajax({
		method: 'GET',
		url:  `api/cards`,
		data: {user_id: userId}
	})
);

export const fetchCard = (id) => (
	$.ajax({
		method: 'GET',
		url: `api/cards/${id}`
	})
);

export const createCard = (card) => (
	$.ajax({
		method: 'POST',
		url: 'api/cards',
		data: {card}
	})
);

export const updateCard = (card) => (
	$.ajax({
		method: 'PATCH',
		url: `api/cards/${card.id}`,
		data: {card}
	})
);

export const deleteCard = (id) => (
	$.ajax({
		method: 'DELETE',
		url: `api/cards/${id}`
	})
);					