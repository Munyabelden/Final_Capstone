class Api::V1::UsersController < ApplicationController
  def current_user
    @user = current_user

    render json: @user
  end
end
