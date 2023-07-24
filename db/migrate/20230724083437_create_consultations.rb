class CreateConsultations < ActiveRecord::Migration[7.0]
  def change
    create_table :consultations do |t|
      t.integer :user_id, null: false
      t.integer :doctor_id, null: false
      t.integer :duration, null: false
      t.string :city, null: false
      t.date :date, null: false
      t.column :type, :enum, null: false, default: 'online', enum_type: 'varchar' # Specify enum_type as 'varchar'
      t.timestamps
    end
  end
end
