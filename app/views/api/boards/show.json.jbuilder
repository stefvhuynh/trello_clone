json.extract! @board, :id, :name, :starred, :user_id

json.lists @board.lists do |list|
  json.extract! list, :id, :name, :order, :board_id
  
  json.cards list.cards do |card|
    json.extract! card, :id, :name, :description, :order, :list_id
  end
end