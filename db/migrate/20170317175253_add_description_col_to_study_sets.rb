class AddDescriptionColToStudySets < ActiveRecord::Migration[5.0]
  def change
    add_column :study_sets, :description, :string
  end
end
