class CreateFolders < ActiveRecord::Migration[5.0]
  def change
    create_table :folders do |t|
      t.string :name, null: false
      t.string :description
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :folders, :user_id
  end
end
