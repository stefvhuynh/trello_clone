class ChecklistsController < ApplicationController
  
  def create
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