json.extract! @study_set, :id, :title, :description

json.cards do 
	json.array! @study_set.cards, partial: 'api/cards/card', as: :card
end

json.folders do
	json.array! @study_set.folders, partial: 'api/folders/folder', as: :folder
end