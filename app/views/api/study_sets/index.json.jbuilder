@study_sets.each do |study_set|
	json.set! study_set.id do
		json.extract! study_set, :id, :term, :definition
	end
end