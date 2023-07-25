Rails.application.routes.draw do
  root "root#index"

  namespace :api do
    namespace :v1 do
      resources :consultations, only: [:index, :show, :create, :update, :destroy]
    end
  end
end
