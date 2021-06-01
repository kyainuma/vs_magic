require 'rails_helper'

RSpec.describe Contact, type: :model do
  context '全てのフィールドが有効な場合' do
    it '有効であること' do
      contact = build(:contact)
      expect(contact).to be_valid
    end
  end

  context 'nameが存在しない場合' do
    it '無効であること' do
      contact = build(:contact, name: nil)
      expect(contact).to be_invalid
      expect(contact.errors[:name]).to include('を入力してください')
    end
  end

  context 'nameが255文字以下の場合' do
    it '有効であること' do
      contact = build(:contact, name: 'a' * 255)
      expect(contact).to be_valid
    end
  end

  context 'nameが256文字以上の場合' do
    it '無効であること' do
      contact = build(:contact, name: 'a' * 256)
      expect(contact).to be_invalid
      expect(contact.errors[:name]).to include('は255文字以内で入力してください')
    end
  end

  context 'emailが存在しない場合' do
    it '無効であること' do
      contact = build(:contact, email: nil)
      expect(contact).to be_invalid
      expect(contact.errors[:email]).to include('を入力してください')
    end
  end

  context 'emailが〇〇＠〇〇.〇〇のフォーマット以外の場合' do
    it '無効であること' do
      contact = build(:contact, email: 'test@example')
      expect(contact).to be_invalid
      expect(contact.errors[:email]).to include('は不正な値です')
    end
  end

  context 'contentが存在しない場合' do
    it '無効であること' do
      contact = build(:contact, content: nil)
      expect(contact).to be_invalid
      expect(contact.errors[:content]).to include('を入力してください')
    end
  end

  context 'nameが65,535文字以下の場合' do
    it '有効であること' do
      contact = build(:contact, content: 'a' * 65_535)
      expect(contact).to be_valid
    end
  end

  context 'nameが65,536文字以上の場合' do
    it '無効であること' do
      contact = build(:contact, content: 'a' * 65_536)
      expect(contact).to be_invalid
      expect(contact.errors[:content]).to include('は65535文字以内で入力してください')
    end
  end
end
