FactoryBot.define do
  factory :contact do
    email { Faker::Internet.unique.email }
    name { Faker::Name.name }
    content { Faker::Lorem.sentence }
  end
end
