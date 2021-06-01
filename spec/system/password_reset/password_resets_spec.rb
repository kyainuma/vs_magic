require 'rails_helper'

RSpec.describe 'パスワードリセット', type: :system do
  let(:user) { create(:user) }

  it 'パスワードが変更できること' do
    visit new_password_reset_path
    fill_in 'メールアドレス', with: user.email
    click_button '送信'
    expect(page).to have_content('パスワードリセット手順を送信しました')
    visit edit_password_reset_path(user.reload.reset_password_token)
    fill_in 'パスワード', with: '123456789'
    fill_in 'パスワード確認', with: '123456789'
    click_button '更新する'
    expect(page).to have_current_path login_path
    expect(page).to have_content('パスワードを変更しました')
  end
end
