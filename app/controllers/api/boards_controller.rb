class Api::BoardsController < ApplicationController

  def show
    @board = Board.includes(
      lists: [cards: [checklists: :items]]
    ).find(params[:id])

    if @board.user_id == current_user.id
      render :show
    else
      render nothing: true, status: 403
    end
  end

  def create
    @board = current_user.boards.build(board_params)
    
    if @board.save
      render :show
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