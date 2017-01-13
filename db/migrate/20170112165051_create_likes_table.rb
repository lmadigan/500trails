class CreateLikesTable < ActiveRecord::Migration[5.0]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :trip_id, null: false
    end
  end
end
