@folders.each do |folder|
	json.set! folder.id do
		json.extract! folder, :id, :name, :description, :user_id
	end
end