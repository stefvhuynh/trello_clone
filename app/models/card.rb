class Card < ActiveRecord::Base
  belongs_to :list
  has_many :checklists
  
  validates :name, :order, :list_id, presence: true
  validates :order, :list_id, numericality: true
  
  before_save :strip_description
  
  def strip_description
    self.description.strip! if self.description
  end
end
