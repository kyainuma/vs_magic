Rails.application.routes.draw do
  root 'static_pages#home'

  resource :time_attack, only: %i[show]
  resources :shortcut_keys, only: %i[index show]
  resources :challenges, only: %i[index]
end
