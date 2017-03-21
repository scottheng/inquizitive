# == Schema Information
#
# Table name: study_set_folders
#
#  id           :integer          not null, primary key
#  study_set_id :integer          not null
#  folder_id    :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class StudySetFolder < ApplicationRecord
	validates :study_set_id, :folder_id, presence: true

	belongs_to :study_set 

	belongs_to :folder
end
