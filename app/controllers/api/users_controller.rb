class Api::UsersController < ApplicationController

  def index
  end
  
  def show
    @user = User.find(params[:id])
    
    if @user.nil?
      render json: @user.errors.full_messages, status: 404
    else
      render :show
    end
  end
  
  def update
  end
  
  private
  
  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
  
end