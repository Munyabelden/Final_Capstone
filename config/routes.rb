Rails.application.routes.draw do
  # devise_for :users
  root "root#index"

  devise_for :users, path: '', path_names: {
    sign_in: 'api/v1/login',
    sign_out: 'api/v1/logout',
    registration: 'api/v1/signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  namespace :api do
    namespace :v1 do
      resources :consultations, only: [:index, :show, :create, :update, :destroy]
    end
  end
end
