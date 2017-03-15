# == Schema Information
#
# Table name: cards
#
#  id           :integer          not null, primary key
#  term         :string           not null
#  definition   :string           not null
#  study_set_id :integer          not null
#  starred      :boolean          default("false"), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Card < ApplicationRecord
	validates :term, :definition, :study_set_id, presence: true 

	belongs_to :study_set
	belongs_to :user
end
