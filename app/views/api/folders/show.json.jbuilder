json.extract! @folder, :id, :name, :description

json.study_sets do 
	json.array! @folder.study_sets, partial: 'api/study_sets/study_set', as: :study_set
end