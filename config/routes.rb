Rails.application.routes.draw do
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create]
  
  root to: 'pages#root'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :update]
    resources :boards
  end
end
