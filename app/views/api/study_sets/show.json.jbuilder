json.extract! @study_set, :id, :title 

json.cards do 
	json.array! @study_set.cards, partial: 'api/cards/card', as: :card
end