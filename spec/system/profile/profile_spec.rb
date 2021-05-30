require 'rails_helper'

RSpec.describe 'プロフィール', type: :system do
  let(:user) { create(:user) }

  describe 'ログイン前' do
    it 'プロフィールの詳細・編集が見れないこと' do
      visit root_path
      expect(page).not_to eq('プロフィール')
      visit profile_path
      expect(page).to have_current_path login_path
      expect(page).to have_content('ログインしてください')
      visit edit_profile_path
      expect(page).to have_current_path login_path
      expect(page).to have_content('ログインしてください')
    end
  end

  describe 'ログイン後' do
    before { login_as(user) }

    it 'プロフィールの詳細が見られること' do
      visit root_path
      click_on 'プロフィール'
      expect(page).to have_current_path profile_path
      expect(page).to have_content(user.email)
      expect(page).to have_content(user.name)
    end

    it 'プロフィールの編集ができること' do
      visit profile_path
      click_on '編集'
      expect(page).to have_current_path edit_profile_path
      fill_in 'ユーザー名', with: '編集後ユーザー名'
      fill_in 'メールアドレス', with: 'edit@example.com'
      click_button '更新する'
      expect(page).to have_current_path profile_path
      expect(page).to have_content('ユーザーを更新しました')
      expect(page).to have_content('編集後ユーザー名')
      expect(page).to have_content('edit@example.com')
    end

    it 'プロフィールの編集に失敗すること' do
      visit profile_path
      click_on '編集'
      expect(page).to have_current_path edit_profile_path
      fill_in 'ユーザー名', with: ''
      fill_in 'メールアドレス', with: ''
      click_button '更新する'
      expect(page).to have_content('ユーザーを更新できませんでした')
      expect(page).to have_content('ユーザー名を入力してください')
      expect(page).to have_content('メールアドレスを入力してください')
    end
  end
end
