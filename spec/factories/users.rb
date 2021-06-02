FactoryBot.define do
  factory :user do
    email { Faker::Internet.unique.email }
    password { 'password' }
    password_confirmation { 'password' }
    name { Faker::Name.name }

    trait :admin do
      role { 1 }
    end
  end
end
