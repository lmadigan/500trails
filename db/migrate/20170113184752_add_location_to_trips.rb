class AddLocationToTrips < ActiveRecord::Migration[5.0]
  def change
    add_column :trips, :location, :string
  end
end
