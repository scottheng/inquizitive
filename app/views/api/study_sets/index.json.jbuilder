@study_sets.each do |study_set|
	json.set! study_set.id do
		json.extract! study_set, :id, :title, :user_id, :description
		json.set! :card_count, study_set.cards.count
	end
end