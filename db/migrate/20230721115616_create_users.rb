class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :fisrt_name, null: false, default: ''
      t.string :last_name, null: false, default: ''
      t.string :phone

      t.timestamps
    end
  end
end
