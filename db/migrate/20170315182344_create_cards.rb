class CreateCards < ActiveRecord::Migration[5.0]
  def change
    create_table :cards do |t|
      t.string :term, null: false
      t.string :definition, null: false
      t.integer :study_set_id, null: false
      t.boolean :starred, null: false, default: false
      t.timestamps
    end
    add_index :cards, :study_set_id
  end
end
