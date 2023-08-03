class Doctor < ApplicationRecord
  has_many :consultations

  validates :name, presence: true
  validates :specialization, presence: true
  validates :bio, presence: true
end
