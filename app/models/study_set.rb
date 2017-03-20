# == Schema Information
#
# Table name: study_sets
#
#  id               :integer          not null, primary key
#  title            :string           not null
#  user_id          :integer          not null
#  visitable_option :string           default("everyone"), not null
#  editable_option  :string           default("only me"), not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class StudySet < ApplicationRecord
	validates :title, :user_id, :visitable_option, :editable_option, presence: true

	belongs_to :user
	has_many :cards, dependent: :destroy
end
