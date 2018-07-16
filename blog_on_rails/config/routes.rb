Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :sessions, only: [:new, :create, :destroy]
  
  resources :users, only: [:new, :create]

  resources :posts do

    resources :comments, only: [:create, :destroy]
    
  end
  
end

