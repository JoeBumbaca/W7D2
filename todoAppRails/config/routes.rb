Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  nam
  resources :todos, only: [:index, :show, :create, :destroy, :update]

end
