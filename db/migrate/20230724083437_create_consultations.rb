class CreateConsultations < ActiveRecord::Migration[7.0]
  def change
    create_table :consultations do |t|
      t.integer :user_id, null: false
      t.integer :doctor_id, null: false
      t.integer :duration, null: false
      t.string :city, null: false
      t.date :date, null: false
      t.enum :type, null: false, default: 'online', enum_name: 'consultation_type'
      t.timestamps
    end
  end
end
