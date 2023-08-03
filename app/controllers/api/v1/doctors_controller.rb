class Api::V1::DoctorsController < ApplicationController
  def index
    doctors = Doctor.all
    render json: doctors_representer(doctors).as_json(only: [:id, :name, :specialization, :bio, :image, :experience, :rate])
  end

  private

  def doctors_representer(doctors)
    doctors.map do |doctor|
      {
        id: doctor.id,
        name: doctor.name,
        specialization: doctor.specialization,
        bio: doctor.bio,
        image: doctor.image,
        experience: doctor.experience,
        rate: doctor.rate,
      }
    end
  end
end
