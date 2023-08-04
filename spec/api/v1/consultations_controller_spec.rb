require 'rails_helper'

RSpec.describe Api::V1::ConsultationsController, type: :controller do
  let(:user) { User.create(first_name: 'John', last_name: 'Doe', email: 'john@example.com') }
  let(:doctor) { Doctor.create(name: 'Dr. Smith', specialization: 'Cardiology') }

  before(:each) do
    @consultation1 = Consultation.create(duration: '60', city: 'Cape', date: '2023-08-08', consultation_type: 'online',
                                         user_id: user.id, doctor_id: doctor.id)
    @consultation2 = Consultation.create(duration: '60', city: 'Cape', date: '2023-08-08', consultation_type: 'online',
                                         user_id: user.id, doctor_id: doctor.id)
    @consultation3 = Consultation.create(duration: '60', city: 'Cape', date: '2023-08-08', consultation_type: 'online',
                                         user_id: user.id, doctor_id: doctor.id)
  end

  describe 'GET #index' do
    it 'returns a successful response' do
      get :index
      expect(response).to have_http_status(:ok)
    end

    it 'returns JSON content type' do
      get :index
      expect(response.content_type).to eq('application/json; charset=utf-8')
    end
  end
end
