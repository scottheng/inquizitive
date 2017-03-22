Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :study_sets, only: [:index, :show, :create, :update, :destroy]
    resources :cards, only: [:index, :show, :create, :update, :destroy]
    resources :folders, only: [:index, :show, :create, :update, :destroy]
    resources :study_set_folders, only: [:create] 

  end
  delete '/api/study_set_folders', to: 'api/study_set_folders#destroy'
  root "static_pages#root"

end
