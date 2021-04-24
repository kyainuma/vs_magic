class UserTimeAttacksController < ApplicationController
  def index
    @user_time_attacks = TimeAttack.order('result_time ASC').limit(100)
  end

  def create
    @user_time_attack = TimeAttack.new(time_attack_params)
    @user_time_attack.save!
  end

  private

    def time_attack_params
      params.require(:user_time_attack).permit(:user_id, :finish_time, :miss_count, :incorrect_answer, :answer_display, :addition_time, :result_time)
    end
end
