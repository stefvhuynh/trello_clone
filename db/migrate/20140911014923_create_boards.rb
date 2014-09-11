class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.string :name, null: false
      t.boolean :starred, null: false
      t.timestamps
    end
    
    add_index :boards, :name
  end
end
