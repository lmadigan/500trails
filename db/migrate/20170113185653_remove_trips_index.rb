class RemoveTripsIndex < ActiveRecord::Migration[5.0]
  def change
    remove_index :trips, column: :title
  end
end
