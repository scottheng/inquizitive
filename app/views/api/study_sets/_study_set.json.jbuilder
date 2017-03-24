json.extract! study_set, :id, :title, :description, :user_id
json.set! :card_count, study_set.cards.count