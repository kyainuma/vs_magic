Rails.application.routes.draw do
  mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?

  root 'static_pages#home'
  get 'terms', to: 'static_pages#terms'
  get 'privacy', to: 'static_pages#privacy'

  get  'login', to: 'user_sessions#new', as: :login
  post 'login', to: 'user_sessions#create'
  delete 'logout', to: 'user_sessions#destroy', as: :logout

  resources :users, only: %i[new create destroy]
  resources :time_attacks, only: %i[index]
  resources :lessons, only: %i[index show]
  resources :user_time_attacks, only: %i[index create]
  resources :password_resets, only: %i[new create edit update]
  resources :contacts, only: %i[new create]
  resource :profile, only: %i[show edit update]
end
