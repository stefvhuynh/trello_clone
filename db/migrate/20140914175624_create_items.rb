class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.boolean :completed, null: false
      t.integer :order, null: false
      t.integer :checklist_id, null: false
      
      t.timestamps
    end
    
    add_index :items, :name
  end
end
