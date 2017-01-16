class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.string :image_url, null: false
      t.integer :trip_id, null: false
      t.float :lat
      t.float :long
      t.timestamps
    end
  end
end
