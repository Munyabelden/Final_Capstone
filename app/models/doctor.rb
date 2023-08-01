class Doctor < ApplicationRecord
  has_many :consultations
  has_many :cities

  validates :name, presence: true
  validates :specialization, presence: true
  validates :bio, presence: true
end
