class List < ActiveRecord::Base
  belongs_to :board

  validates :name, :order, :board_id, presence: true
  validates :order, :board_id, numericality: true
end
