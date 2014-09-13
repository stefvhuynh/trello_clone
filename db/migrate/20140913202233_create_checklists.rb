class CreateChecklists < ActiveRecord::Migration
  def change
    create_table :checklists do |t|
      t.string :name, null: false
      t.integer :order, null: false
      t.integer :card_id, null: false
      
      t.timestamps
    end
    
    add_index :checklists, :name
  end
end
