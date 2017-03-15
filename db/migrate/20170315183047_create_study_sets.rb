class CreateStudySets < ActiveRecord::Migration[5.0]
  def change
    create_table :study_sets do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.string :visitable_option, null: false, default: "everyone"
      t.string :editable_option, null: false, default: "only me"
      t.timestamps
    end
    add_index :study_sets, :user_id
  end
end
