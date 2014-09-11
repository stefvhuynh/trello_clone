class Board < ActiveRecord::Base
  validates :name, :starred, presence: true
  
  def starred?
    self.starred
  end
end
