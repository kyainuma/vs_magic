FactoryBot.define do
  factory :shortcut_key do
    sequence(:answer_key) { |n| "test_answer_key_#{n}" }
    sequence(:modifier_key) { |n| "test_modifier_key_#{n}" }
    sequence(:question) { |n| "test_question_#{n}" }
    sequence(:display_key) { |n| "test_display_key_#{n}" }
    os_type { 0 }
    image { File.new(Rails.root.join('public/no_image.gif')) }
  end
end
