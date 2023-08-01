class Api::V1::ConsultationsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_consultation, only: %i[show update destroy]

  def index
    @consultations = Consultation.all

    render json: @consultations
  end

  def show
    render json: @consultation
  end

  def create
    @consultation = Consultation.new(consultation_params)

    if @consultation.save
      render json: @consultation, status: :created, location: @consultation
    else
      puts @consultation.errors.full_messages
      render json: @consultation.errors, status: :unprocessable_entity
    end
  end

  def update
    if @consultation.update(consultation_params)
      render json: @consultation
    else
      render json: @consultation.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @consultation.destroy
  end

  private

  def set_consultation
    @consultation = Consultation.find(params[:id])
  end

  def consultation_params
    params.require(:consultation).permit(:user_id, :doctor_id, :duration, :city, :date, :consultation_type)
  end
end
