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

require 'test_helper'

class StudySetFolderTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
