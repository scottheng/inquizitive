class CreateStudySetFolders < ActiveRecord::Migration[5.0]
  def change
    create_table :study_set_folders do |t|
      t.integer :study_set_id, null: false
      t.integer :folder_id, null: false
      t.timestamps
    end
    add_index :study_set_folders, :study_set_id
    add_index :study_set_folders, :folder_id
  end
end
