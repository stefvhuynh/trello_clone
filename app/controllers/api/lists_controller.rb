class Api::ListsController < ApplicationController

  def create
  end

  def update
  end

  def destroy
  end

  private

  def list_params
    params.require(:list).permit(:name, :order, :board_id)
  end

end