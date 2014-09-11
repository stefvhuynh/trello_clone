json.extract! @user, :name

if @user == current_user
  json.boards @user.boards
end