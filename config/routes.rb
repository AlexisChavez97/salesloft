Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :people, only: [:index]
    end
  end

  resources :home, only: [:index]

  root "home#index"
end
