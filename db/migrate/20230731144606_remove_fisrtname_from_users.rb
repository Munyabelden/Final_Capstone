class RemoveFisrtnameFromUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :fisrt_name, :string
  end
end
