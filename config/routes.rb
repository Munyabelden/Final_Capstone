Rails.application.routes.draw do
  devise_for :users
  root "root#index"

  namespace :api do
    namespace :v1 do
      resources :consultations, only: [:index, :show, :create, :update, :destroy]
    end
  end
end
