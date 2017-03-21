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

require 'test_helper'

class StudySetTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
