Rails.application.routes.draw do
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create]

  root to: 'pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :update]
    resources :boards, except: [:index, :new, :edit]
    resources :lists, only: [:create, :update, :destroy]
    resources :cards, only: [:create, :update, :destroy]
    resources :checklists, only: [:create, :update, :destroy]
    resources :items, only: [:create, :update, :destroy]
  end
end
