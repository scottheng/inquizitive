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
#  description      :string
#

class StudySet < ApplicationRecord
	validates :title, :user_id, :visitable_option, :editable_option, presence: true

	belongs_to :user
	has_many :cards, dependent: :destroy
	has_many :study_set_folders

	has_many :folders,
		through: :study_set_folders,
		source: :folder
end
