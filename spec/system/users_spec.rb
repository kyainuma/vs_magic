require 'rails_helper'

RSpec.describe User, type: :system do
  let(:user) { create(:user) }

  describe 'ログイン前' do
    describe 'ユーザー新規作成' do
      context 'フォームの入力値が正常' do
        it 'ユーザーの新規作成が完了する' do
          visit new_user_path
          fill_in 'ユーザー名', with: 'テストユーザー'
          fill_in 'メールアドレス', with: 'test@example.com'
          fill_in 'パスワード', with: 'password'
          fill_in 'パスワード確認', with: 'password'
          click_button '登録'
          expect(page).to have_current_path login_path
          expect(page).to have_content 'ユーザーの作成に成功しました'
        end
      end

      context 'ユーザー名が未入力' do
        it 'ユーザーの新規作成が失敗する' do
          visit new_user_path
          fill_in 'ユーザー名', with: ''
          fill_in 'メールアドレス', with: 'test@example.com'
          fill_in 'パスワード', with: 'password'
          fill_in 'パスワード確認', with: 'password'
          click_button '登録'
          expect(page).to have_current_path users_path
          expect(page).to have_content 'ユーザーの作成に失敗しました'
          expect(page).to have_content 'ユーザー名を入力してください'
        end
      end

      context 'メールアドレスが未入力' do
        it 'ユーザーの新規作成が失敗する' do
          visit new_user_path
          fill_in 'ユーザー名', with: 'テストユーザー'
          fill_in 'メールアドレス', with: ''
          fill_in 'パスワード', with: 'password'
          fill_in 'パスワード確認', with: 'password'
          click_button '登録'
          expect(page).to have_current_path users_path
          expect(page).to have_content 'ユーザーの作成に失敗しました'
          expect(page).to have_content 'メールアドレスを入力してください'
        end
      end

      context '登録済みのメールアドレスを使用' do
        it 'ユーザーの新規作成が失敗する' do
          existed_user = create(:user)
          visit new_user_path
          fill_in 'ユーザー名', with: 'テストユーザー'
          fill_in 'メールアドレス', with: existed_user.email
          fill_in 'パスワード', with: 'password'
          fill_in 'パスワード確認', with: 'password'
          click_button '登録'
          expect(page).to have_current_path users_path
          expect(page).to have_content 'ユーザーの作成に失敗しました'
          expect(page).to have_content 'メールアドレスはすでに存在します'
          expect(page).to have_field 'メールアドレス', with: existed_user.email
        end
      end

      context 'メールアドレスのフォーマットが間違っている場合' do
        it 'ユーザーの新規作成が失敗すること' do
          visit new_user_path
          fill_in 'ユーザー名', with: 'テストユーザー'
          fill_in 'メールアドレス', with: 'test@com'
          fill_in 'パスワード', with: 'password'
          fill_in 'パスワード確認', with: 'password'
          click_button '登録'
          expect(page).to have_current_path users_path
          expect(page).to have_content 'ユーザーの作成に失敗しました'
          expect(page).to have_content 'メールアドレスは不正な値です'
        end
      end

      context 'パスワードが6文字以下の場合' do
        it 'ユーザーの新規作成が失敗する' do
          visit new_user_path
          fill_in 'ユーザー名', with: 'テストユーザー'
          fill_in 'メールアドレス', with: 'test@example.com'
          fill_in 'パスワード', with: 'a' * 5
          fill_in 'パスワード確認', with: 'a' * 5
          click_button '登録'
          expect(page).to have_current_path users_path
          expect(page).to have_content 'ユーザーの作成に失敗しました'
          expect(page).to have_content 'パスワードは6文字以上で入力してください'
        end
      end

      context 'パスワードとパスワード確認が一致していない場合' do
        it 'ユーザーの新規作成が失敗する' do
          visit new_user_path
          fill_in 'ユーザー名', with: 'テストユーザー'
          fill_in 'メールアドレス', with: 'test@example.com'
          fill_in 'パスワード', with: 'password'
          fill_in 'パスワード確認', with: 'hogehoge'
          click_button '登録'
          expect(page).to have_current_path users_path
          expect(page).to have_content 'ユーザーの作成に失敗しました'
          expect(page).to have_content 'パスワード確認とパスワードの入力が一致しません'
        end
      end
    end
  end
end
