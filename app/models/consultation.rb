class Consultation < ApplicationRecord
  belongs_to :user
  belongs_to :doctor

  validates :duration, presence: true, numericality: { only_integer: true, greater_than: 0 }
  validates :city, presence: true
  validates :date, presence: true
  validates :consultation_type, presence: true, inclusion: { in: %w[online in-person] }
end
