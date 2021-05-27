class TimeAttack < ApplicationRecord
  belongs_to :user

  validates :user_id, presence: true
  validates :finish_time, presence: true
  validates :miss_count, presence: true
  validates :incorrect_answer, presence: true
  validates :answer_display, presence: true
  validates :addition_time, presence: true
  validates :result_time, presence: true
end
