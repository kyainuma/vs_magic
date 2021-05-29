require 'rails_helper'

RSpec.describe TimeAttack, type: :model do
  let!(:user) { create(:user, id: 1) }

  context '全てのフィールドが有効な場合' do
    it '有効であること' do
      time_attack = build(:time_attack, user_id: user.id)
      expect(time_attack).to be_valid
    end
  end

  context 'user_idが存在しない場合' do
    it '無効であること' do
      time_attack = build(:time_attack, user_id: nil)
      expect(time_attack).to be_invalid
      expect(time_attack.errors[:user_id]).to include('を入力してください')
    end
  end

  context 'user_idが存在しないuserの場合' do
    it '無効であること' do
      time_attack = build(:time_attack, user_id: 2)
      expect(time_attack).to be_invalid
      expect(time_attack.errors[:user]).to include('を入力してください')
    end
  end

  context 'finish_timeが存在しない場合' do
    it '無効であること' do
      time_attack = build(:time_attack, user_id: user.id, finish_time: nil)
      expect(time_attack).to be_invalid
      expect(time_attack.errors[:finish_time]).to include('を入力してください')
    end
  end

  context 'miss_countが存在しない場合' do
    it '無効であること' do
      time_attack = build(:time_attack, user_id: user.id, miss_count: nil)
      expect(time_attack).to be_invalid
      expect(time_attack.errors[:miss_count]).to include('を入力してください')
    end
  end

  context 'incorrect_answerが存在しない場合' do
    it '無効であること' do
      time_attack = build(:time_attack, user_id: user.id, incorrect_answer: nil)
      expect(time_attack).to be_invalid
      expect(time_attack.errors[:incorrect_answer]).to include('を入力してください')
    end
  end

  context 'answer_displayが存在しない場合' do
    it '無効であること' do
      time_attack = build(:time_attack, user_id: user.id, answer_display: nil)
      expect(time_attack).to be_invalid
      expect(time_attack.errors[:answer_display]).to include('を入力してください')
    end
  end

  context 'addition_timeが存在しない場合' do
    it '無効であること' do
      time_attack = build(:time_attack, user_id: user.id, addition_time: nil)
      expect(time_attack).to be_invalid
      expect(time_attack.errors[:addition_time]).to include('を入力してください')
    end
  end

  context 'result_timeが存在しない場合' do
    it '無効であること' do
      time_attack = build(:time_attack, user_id: user.id, result_time: nil)
      expect(time_attack).to be_invalid
      expect(time_attack.errors[:result_time]).to include('を入力してください')
    end
  end
end
