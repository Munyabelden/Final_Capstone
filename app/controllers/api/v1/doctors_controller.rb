class Api::V1::DoctorsController < ApplicationController
  def index
    doctors = Doctor.all
    render json: doctors_representer(doctors).as_json(only: [:id, :name, :specialization, :bio, :image, :experience, :rate])
  end

  def show
    @doctor = Doctor.find_by(id: params[:id])
    if @doctor
      render json: @doctor, status: 200
    else
      render json: {
        error: 'Doctor not found', status: 404
      }
    end
  end

  def create
    @doctor = Doctor.new(doctor_params)

    if @doctor.save
      render json: @doctor, status: 200
    else
      render json: {
        error: 'Error creating service...'
      }
    end
  end

  def destroy
    @doctor = Doctor.find(params[:id])
    @doctor.destroy
    head :no_content
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

  def doctor_params
    params.require(:doctor).permit(:name, :price, :image, :details, :duration, :rating, :trailer)
  end
end
