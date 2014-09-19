class Api::ItemsController < ApplicationController
  
  def create
    @item = Item.new(item_params)
    
    if @item.save
      render :show, status: 200
    else
      render json: @item.errors.full_messages, status: 404
    end
  end
  
  def update
    @item = Item.find(params[:id])
    
    if @item.update(item_params)
      render :show, status: 200
    else
      render json: @item.errors.full_messages, status: 404
    end
  end
  
  def destroy
    @item = Item.find(params[:id])
    
    if @item.destroy
      render :show, status: 200
    else
      render json: @item.errors.full_messages, status: 404
    end
  end
  
  private
  
  def item_params
    params.require(:item).permit(:name, :completed, :order, :checklist_id)
  end
  
end