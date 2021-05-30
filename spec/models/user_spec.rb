require 'rails_helper'

RSpec.describe User, type: :model do
  context '全てのフィールドが有効な場合' do
    it '有効であること' do
      user = build(:user)
      expect(user).to be_valid
    end
  end

  context 'nameが存在しない場合' do
    it '無効であること' do
      user = build(:user, name: nil)
      expect(user).to be_invalid
      expect(user.errors[:name]).to include('を入力してください')
    end
  end

  context 'nameが255文字以下の場合' do
    it '有効であること' do
      user = build(:user, name: 'a' * 255)
      expect(user).to be_valid
    end
  end

  context 'nameが256文字以上の場合' do
    it '無効であること' do
      user = build(:user, name: 'a' * 256)
      expect(user).to be_invalid
      expect(user.errors[:name]).to include('は255文字以内で入力してください')
    end
  end

  context 'emailが存在しない場合' do
    it '無効であること' do
      user = build(:user, email: nil)
      expect(user).to be_invalid
      expect(user.errors[:email]).to include('を入力してください')
    end
  end

  context 'emailが重複している場合' do
    it '無効であること' do
      user1 = create(:user)
      user2 = build(:user, email: user1.email)
      expect(user2).to be_invalid
      expect(user2.errors[:email]).to include('はすでに存在します')
    end
  end

  context 'emailが〇〇＠〇〇.〇〇のフォーマット以外の場合' do
    it '無効であること' do
      user = build(:user, email: 'test@example')
      expect(user).to be_invalid
      expect(user.errors[:email]).to include('は不正な値です')
    end
  end

  context 'passwordが6文字以下の場合' do
    it '無効であること' do
      user = build(:user, password: 'a' * 5)
      expect(user).to be_invalid
      expect(user.errors[:password]).to include('は6文字以上で入力してください')
    end
  end

  context 'password_confirmationがpasswordと一致していない場合' do
    it '無効であること' do
      user = build(:user, password_confirmation: 'hogehoge')
      expect(user).to be_invalid
      expect(user.errors[:password_confirmation]).to include('とパスワードの入力が一致しません')
    end
  end
end
