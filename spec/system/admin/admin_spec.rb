require 'rails_helper'

RSpec.describe '管理画面', type: :system do
  let(:general_user) { create(:user) }
  let(:admin_user) { create(:user, :admin) }

  describe 'ログイン前' do
    context '管理画面にアクセス' do
      it '失敗すること' do
        visit '/admin'
        expect(page).to have_current_path login_path
        expect(page).to have_content 'ログインしてください'
      end
    end
  end

  describe '一般ユーザー' do
    before { login_as(general_user) }

    context '管理画面にアクセス' do
      it '失敗すること' do
        visit '/admin'
        expect(page).to have_current_path root_path
        expect(page).to have_content '権限がありません'
      end
    end
  end

  describe '管理者ユーザー' do
    before { login_as(admin_user) }

    context '管理画面にアクセス' do
      it '成功すること' do
        visit '/admin'
        expect(page).to have_current_path '/admin'
        expect(page).to have_content 'サイト管理'
      end
    end
  end
end
