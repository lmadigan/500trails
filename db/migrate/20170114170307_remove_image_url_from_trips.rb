class RemoveImageUrlFromTrips < ActiveRecord::Migration[5.0]
  def change
    remove_column :trips, :image_url
  end
end
