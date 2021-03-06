class Api::CardsController < ApplicationController
  
  def create
    @card = Card.new(card_params)
    
    if @card.save
      render :show, status: 200
    else
      render json: @card.errors.full_messages, status: 404
    end
  end
  
  def update
    @card = Card.find(params[:id])
    
    if @card.update(card_params)
      render :show, status: 200
    else
      render json: @card.errors.full_messages, status: 404
    end
  end
  
  def destroy
    @card = Card.find(params[:id])
    
    if @card.destroy
      render :show, status: 200
    else
      render json: @card.errors.full_messages, status: 404
    end
  end
  
  private
  
  def card_params
    params.require(:card).permit(:name, :order, :list_id, :description)
  end
  
end