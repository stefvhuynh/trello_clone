class AddUserIdToBoards < ActiveRecord::Migration
  def change
    add_column :boards, :user_id, :integer, null: false
    add_index :boards, :user_id
  end
end
