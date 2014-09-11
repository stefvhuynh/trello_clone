class Api::BoardsController < ApplicationController

  def index
    render json: current_user.boards
  end

  def show
    @board = Board.find(params[:id])

    if @board.user_id == current_user.id
      render json: @board
    else
      render json: 'Access forbidden', status: 403
    end
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