Rails.application.routes.draw do
  root 'static_pages#home'

  resource :time_attack, only: [:show]
end
