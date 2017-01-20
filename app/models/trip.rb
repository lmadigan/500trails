class Trip < ApplicationRecord
  validates :title, :description, :user_id, presence: true
  belongs_to :user
  has_many :images, dependent: :destroy
  has_many :likes
end
