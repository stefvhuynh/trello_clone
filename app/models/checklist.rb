class Checklist < ActiveRecord::Base
  belongs_to :card
  has_many :items
  
  validates :name, :order, :card_id, presence: true
  validates :order, :card_id, numericality: true
end
