class SessionsController < ApplicationController
  
  def new
    render :new
  end
  
  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    
    if user.nil?
      flash.now[:errors] = ['Invalid email/password combination']
      render :new
    else
      sign_in!(user)
      redirect_to root_url
    end
  end
  
  def destroy
    sign_out!
    render nothing: true, status: 200
  end
  
end
