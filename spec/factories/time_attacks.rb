FactoryBot.define do
  factory :time_attack do
    finish_time { 100 }
    miss_count { 0 }
    incorrect_answer { 0 }
    answer_display { true }
    addition_time { 0 }
    result_time { 100 }
    user
  end
end
