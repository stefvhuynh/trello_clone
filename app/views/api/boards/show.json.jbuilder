json.extract! @board, :name, :starred, :created_at, :updated_at, :user_id
json.lists @board.lists