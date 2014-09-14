class Api::ListsController < ApplicationController

  def create
    list = List.new(list_params)
    
    if list.save
      render nothing: true, status: 200
    else
      render json: list.errors.full_messages, status: 404
    end
  end

  def update
    list = List.find(params[:id])
    
    if list.update(list_params)
      render nothing: true, status: 200
    else
      render json: list.errors.full_messages, status: 404
    end
  end

  def destroy
  end

  private

  def list_params
    params.require(:list).permit(:name, :order, :board_id)
  end

end