class List < ActiveRecord::Base
  belongs_to :board
  has_many :cards

  validates :name, :order, :board_id, presence: true
  validates :order, :board_id, numericality: true
end
