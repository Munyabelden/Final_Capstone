class CreateConsultations < ActiveRecord::Migration[7.0]
  def change
    create_table :consultations do |t|
      t.integer :user_id, null: false, foreign_key: true
      t.integer :doctor_id, null: false, foreign_key: true
      t.integer :duration, null: false
      t.string :city, null: false
      t.date :date, null: false
      t.column :consultation_type, :enum, null: false, default: 'online', enum_type: 'varchar'
      t.timestamps
    end
  end
end
