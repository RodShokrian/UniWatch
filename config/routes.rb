Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :followed_universities, only: [:create, :show, :destroy, :index]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :universities, only: [:index, :show]
  end

  match "/api/users/:user_id/followed_universities", to: "api/followed_universities#destroy", via: "delete", defaults: { id: nil}

   root "static_pages#root"


end
