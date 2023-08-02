require 'rails_helper'

RSpec.describe Doctor, type: :model do
  let(:consultation) { Consultation.new(duration: 30, city: 'Example City', date: Date.today, consultation_type: 'in-person') }

  it 'is valid with valid attributes' do
    doctor = Doctor.new(name: 'Dr. John Doe', specialization: 'Cardiologist', bio: 'Experienced cardiologist with a focus on heart health.')
    expect(doctor).to be_valid
  end

  it 'is not valid without a name' do
    doctor = Doctor.new(specialization: 'Cardiologist', bio: 'Experienced cardiologist with a focus on heart health.')
    expect(doctor).not_to be_valid
  end

  it 'is not valid without a specialization' do
    doctor = Doctor.new(name: 'Dr. John Doe', bio: 'Experienced cardiologist with a focus on heart health.')
    expect(doctor).not_to be_valid
  end

  it 'is not valid without a bio' do
    doctor = Doctor.new(name: 'Dr. John Doe', specialization: 'Cardiologist')
    expect(doctor).not_to be_valid
  end
end
