class Trip < ApplicationRecord
  validates :title, :description, :user_id, :image_url, presence: true 
  belongs_to :user
end
