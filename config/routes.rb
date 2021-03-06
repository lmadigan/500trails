Rails.application.routes.draw do
  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :trips, only: [:new, :create, :index, :update, :show, :destroy] do
      resource :likes, only: [:create, :destroy]
    end
    resources :images, only: [:create]
  end
end
