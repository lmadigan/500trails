class Image < ApplicationRecord
  validates :image_url, :trip_id, presence: true
  belongs_to :trip
end
