Rails.application.routes.draw do
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create]

  root to: 'pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :update]
    resources :boards, except: [:new, :edit]
    resources :lists, only: [:create, :update, :destroy]
  end
end
