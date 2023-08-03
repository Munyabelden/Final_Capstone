Rails.application.routes.draw do
  # devise_for :users

  devise_for :users, path: '', path_names: {
    sign_in: 'api/v1/users/login',
    sign_out: 'api/v1/users/logout',
    registration: 'api/v1/users/signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  namespace :api do
    namespace :v1 do
      resources :doctors, only: [:index, :show, :create, :destroy]
      resources :consultations, only: [:index, :show, :create, :update, :destroy]
      get 'current_user', to: 'users#current_user'
    end
  end

  root "root#index"
  get '*path', to: 'root#index'
end
