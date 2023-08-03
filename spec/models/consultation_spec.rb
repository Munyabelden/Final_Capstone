require 'rails_helper'

RSpec.describe Consultation, type: :model do
  let(:user) { User.create(first_name: 'John Doe', email: 'john@example.com', password: 'password') }
  let(:doctor) { Doctor.create(name: 'Dr. Jane Smith', specialization: 'Dermatologist', bio: 'Experienced dermatologist with a focus on skincare.') }

  it 'is valid with valid attributes' do
    consultation = Consultation.new(duration: 30, city: 'Example City', date: Date.today, consultation_type: 'in-person', user: user, doctor: doctor)
    expect(consultation).to be_valid
  end

  it 'is not valid without a duration' do
    consultation = Consultation.new(city: 'Example City', date: Date.today, consultation_type: 'in-person', user: user, doctor: doctor)
    expect(consultation).not_to be_valid
  end

  it 'is not valid without a city' do
    consultation = Consultation.new(duration: 30, date: Date.today, consultation_type: 'in-person', user: user, doctor: doctor)
    expect(consultation).not_to be_valid
  end

  it 'is not valid without a date' do
    consultation = Consultation.new(duration: 30, city: 'Example City', consultation_type: 'in-person', user: user, doctor: doctor)
    expect(consultation).not_to be_valid
  end

  it 'is not valid with an invalid consultation_type' do
    consultation = Consultation.new(duration: 30, city: 'Example City', date: Date.today, consultation_type: 'invalid_type', user: user, doctor: doctor)
    expect(consultation).not_to be_valid
  end
end
