class Api::ChecklistsController < ApplicationController
  
  def create
    @checklist = Checklist.new(checklist_params)
    
    if @checklist.save
      render :show, status: 200
    else
      render json: @checklist.errors.full_messages, status: 404
    end
  end
  
  def update
  end
  
  def destroy
  end
  
  private
  
  def checklist_params
    params.require(:checklist).permit(:name, :order, :card_id)
  end
  
end