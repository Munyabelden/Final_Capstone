class User < ApplicationRecord
  has_many :consultations

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :phone, allow_blank: true, format: { with: /\A\d+\z/, message: 'should only contain digits' }
end
