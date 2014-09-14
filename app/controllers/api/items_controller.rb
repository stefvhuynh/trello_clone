class Api:ItemsController < ApplicationController
  
  def create
  end
  
  def update
  end
  
  def destroy
  end
  
  private
  
  def item_params
    params.require(:item).permit(:name, :completed, :order, :checklist_id)
  end
  
end