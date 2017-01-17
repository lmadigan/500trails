class ChangeTripsTable < ActiveRecord::Migration[5.0]
  def change
    change_column_null :trips, :description, true
  end
end
