# == Schema Information
#
# Table name: folders
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :string
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Folder < ApplicationRecord
	validates :name, :user_id, presence: true

	belongs_to :user

	has_many :study_set_folders

	has_many :study_sets,
		through: :study_set_folders,
		source: :study_set
end
