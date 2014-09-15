class Item < ActiveRecord::Base
  belongs_to :checklist
  
  validates :name, :order, :checklist_id, presence: true
  validates :completed, inclusion: { in: [true, false] }
  validates :order, :checklist_id, numericality: true
end
