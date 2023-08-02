class Api::V1::DoctorsController < ApplicationController
    def index
        @doctors = Doctor.all
        render json: @doctors
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
    
      def doctor_params
        params.require(:doctor).permit(:name, :price, :image, :details, :duration, :rating, :trailer)
      end
    end
