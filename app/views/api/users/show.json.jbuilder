json.extract! @user, :name

if @user == current_user
  json.boards @user.boards do |board|
    json.id board.id
    json.name board.name
    json.starred board.starred
    json.user_id board.user_id
  end
end