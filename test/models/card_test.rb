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

require 'test_helper'

class CardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
