class Card < ActiveRecord::Base
  belongs_to :list
  
  validates :name, :order, :list_id, presence: true
  validates :order, :list_id, numericality: true
end
