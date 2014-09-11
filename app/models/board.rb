class Board < ActiveRecord::Base
  belongs_to :user
  has_many :lists

  validates :name, presence: true
  validates :starred, inclusion: { in: [true, false] }

  def starred?
    self.starred
  end
end
