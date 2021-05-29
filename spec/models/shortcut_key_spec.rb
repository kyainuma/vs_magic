require 'rails_helper'

RSpec.describe ShortcutKey, type: :model do
  context '全てのフィールドが有効な場合' do
    it '有効であること' do
      shortcut_key = build(:shortcut_key)
      expect(shortcut_key).to be_valid
    end
  end

  context 'answer_keyが存在しない場合' do
    it '無効であること' do
      shortcut_key = build(:shortcut_key, answer_key: nil)
      expect(shortcut_key).to be_invalid
      expect(shortcut_key.errors[:answer_key]).to include('を入力してください')
    end
  end

  context 'answer_keyが255文字以下の場合' do
    it '有効であること' do
      shortcut_key = build(:shortcut_key, answer_key: 'a' * 255)
      expect(shortcut_key).to be_valid
    end
  end

  context 'answer_keyが256文字以上の場合' do
    it '無効であること' do
      shortcut_key = build(:shortcut_key, answer_key: 'a' * 256)
      expect(shortcut_key).to be_invalid
      expect(shortcut_key.errors[:answer_key]).to include('は255文字以内で入力してください')
    end
  end

  context 'modifier_keyが255文字以下の場合' do
    it '有効であること' do
      shortcut_key = build(:shortcut_key, modifier_key: 'a' * 255)
      expect(shortcut_key).to be_valid
    end
  end

  context 'modifier_keyが256文字以上の場合' do
    it '無効であること' do
      shortcut_key = build(:shortcut_key, modifier_key: 'a' * 256)
      expect(shortcut_key).to be_invalid
      expect(shortcut_key.errors[:modifier_key]).to include('は255文字以内で入力してください')
    end
  end

  context 'questionが存在しない場合' do
    it '無効であること' do
      shortcut_key = build(:shortcut_key, question: nil)
      expect(shortcut_key).to be_invalid
      expect(shortcut_key.errors[:question]).to include('を入力してください')
    end
  end

  context 'questionが255文字以下の場合' do
    it '有効であること' do
      shortcut_key = build(:shortcut_key, question: 'a' * 255)
      expect(shortcut_key).to be_valid
    end
  end

  context 'questionが256文字以上の場合' do
    it '無効であること' do
      shortcut_key = build(:shortcut_key, question: 'a' * 256)
      expect(shortcut_key).to be_invalid
      expect(shortcut_key.errors[:question]).to include('は255文字以内で入力してください')
    end
  end

  context 'display_keyが存在しない場合' do
    it '無効であること' do
      shortcut_key = build(:shortcut_key, display_key: nil)
      expect(shortcut_key).to be_invalid
      expect(shortcut_key.errors[:display_key]).to include('を入力してください')
    end
  end

  context 'display_keyが255文字以下の場合' do
    it '有効であること' do
      shortcut_key = build(:shortcut_key, display_key: 'a' * 255)
      expect(shortcut_key).to be_valid
    end
  end

  context 'display_keyが256文字以上の場合' do
    it '無効であること' do
      shortcut_key = build(:shortcut_key, display_key: 'a' * 256)
      expect(shortcut_key).to be_invalid
      expect(shortcut_key.errors[:display_key]).to include('は255文字以内で入力してください')
    end
  end

  context 'os_typeが存在しない場合' do
    it '無効であること' do
      shortcut_key = build(:shortcut_key, os_type: nil)
      expect(shortcut_key).to be_invalid
      expect(shortcut_key.errors[:os_type]).to include('を入力してください')
    end
  end
end
