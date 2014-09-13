class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :name, null: false
      t.integer :order, null: false
      t.integer :list_id, null: false

      t.timestamps
    end
    
    add_index :cards, :name
  end
end
