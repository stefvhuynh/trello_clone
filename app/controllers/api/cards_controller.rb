class Api::CardsController < ApplicationController
  
  def create
    card = Card.new(card_params)
    
    if card.save
      render nothing: true, status: 200
    else
      render json: card.errors.full_messages, status: 404
    end
  end
  
  def update
  end
  
  def destroy
  end
  
  private
  
  def card_params
    params.require(:card).permit(:name, :order, :list_id)
  end
  
end