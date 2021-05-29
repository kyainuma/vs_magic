FactoryBot.define do
  factory :shortcut_key do
    answer_key { 'test_answer_key' }
    modifier_key { 'test_modifier_key' }
    question { 'test_question' }
    display_key { 'test_display_key' }
    os_type { 0 }
    image { File.new(Rails.root.join('public/no_image.gif')) }
  end
end
