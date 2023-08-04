class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception, prepend: true

  before_action :authenticate_user!, :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) do |u|
      u.permit(:first_name, :last_name, :email, :phone, :password, :password_confirmation)
    end
    # devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:name, :email, :password, :current_password) }
  end
end
