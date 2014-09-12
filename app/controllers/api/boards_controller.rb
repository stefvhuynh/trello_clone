class Api::BoardsController < ApplicationController

  def index
    render json: current_user.boards
  end

  def show
    @board = Board.includes(:lists).find(params[:id])

    if @board.user_id == current_user.id
      render :show
    else
      render json: 'Access forbidden', status: 403
    end
  end

  def create
    board = current_user.boards.build(board_params)
    
    if board.save
      render json: board
    else
      render json: board.errors.full_messages, status: 422
    end
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