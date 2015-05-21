class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :order_number
      t.references :user, index: true
      t.integer :quantity
      t.string :size
      t.float :price

      t.timestamps
    end
  end
end
