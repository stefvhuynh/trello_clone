class Api::BoardsController < ApplicationController
  
  def index
    @boards = Board.all
    render json: @boards
  end
  
  def show
  end
  
  def create
  end
  
  def update
  end
  
  def destroy
  end
  
  private
  
  def board_params
    params.require(:board).permit(:name, :starred)
  end
  
end