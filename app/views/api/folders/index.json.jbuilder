@folders.each do |folder|
	json.set! folder.id do
		json.extract! folder, :id, :name, :description, :user_id
		json.set! :study_set_count, folder.study_sets.count
	end
end