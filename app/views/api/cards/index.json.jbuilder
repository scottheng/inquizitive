@cards.each do |card|
	json.set! card.id do
		json.extract! card, :id, :term, :definition
	end
end