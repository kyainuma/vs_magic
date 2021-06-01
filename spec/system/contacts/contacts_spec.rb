require 'rails_helper'

RSpec.describe 'Contact', type: :system do
  describe 'ログイン前' do
    context '正常系' do
      context 'お名前・メールアドレス・お問い合わせ内容を入力した場合' do
        it 'お問い合わせが成功し、ユーザーと管理者にメールが送信されていること' do
          visit root_path
          click_on 'お問い合わせ'
          expect(page).to have_current_path new_contact_path
          fill_in 'お名前', with: 'テストユーザー'
          fill_in 'メールアドレス', with: 'test@example.com'
          fill_in 'お問い合わせ内容', with: 'テストお問い合わせ内容'
          click_on '送信'
          expect(page).to have_current_path new_contact_path
          expect(page).to have_content 'お問い合わせを受付しました'
          user_mail = ContactMailer.deliveries.first
          expect(user_mail.subject).to eq 'お問い合わせを受け付けました'
          expect(user_mail.from).to eq(['yasu6491@icloud.com'])
          expect(user_mail.to).to eq(['test@example.com'])
          expect(user_mail.body).to match '以下の内容でお問い合わせを受け付けました。'
          expect(user_mail.body).to match 'メールアドレス：test@example.com'
          expect(user_mail.body).to match 'お名前：テストユーザー'
          expect(user_mail.body).to match 'お問い合わせ内容：テストお問い合わせ内容'
          admin_mail = ContactMailer.deliveries.last
          expect(admin_mail.subject).to eq 'お問い合わせがありました'
          expect(admin_mail.from).to eq(['yasu6491@icloud.com'])
          expect(admin_mail.to).to eq(['yasu6491@icloud.com'])
          expect(admin_mail.body).to match 'お問い合わせがありました。'
          expect(admin_mail.body).to match 'メールアドレス：test@example.com'
          expect(admin_mail.body).to match 'お名前：テストユーザー'
          expect(admin_mail.body).to match 'お問い合わせ内容：テストお問い合わせ内容'
        end
      end
    end

    context '異常系' do
      context 'お名前・メールアドレス・お問い合わせ内容を入力しなかった場合' do
        it 'お問い合わせが失敗し、ユーザーと管理者にメールが送信されていないこと' do
          visit root_path
          click_on 'お問い合わせ'
          expect(page).to have_current_path new_contact_path
          click_on '送信'
          expect(page).to have_content 'お問い合わせに失敗しました'
          expect(page).to have_content 'お名前を入力してください'
          expect(page).to have_content 'メールアドレスを入力してください'
          expect(page).to have_content 'お問い合わせ内容を入力してください'
          expect(ContactMailer.deliveries.count).to eq 0
        end
      end

      context 'お問い合わせ内容のみを入力しなかった場合' do
        it 'お問い合わせが失敗し、お名前・メールアドレスがフォームに入力されていること' do
          visit root_path
          click_on 'お問い合わせ'
          expect(page).to have_current_path new_contact_path
          fill_in 'お名前', with: 'テストユーザー'
          fill_in 'メールアドレス', with: 'test@example.com'
          click_on '送信'
          expect(page).to have_content 'お問い合わせに失敗しました'
          expect(page).to have_content 'お問い合わせ内容を入力してください'
          expect(page).to have_selector("input[value='テストユーザー']")
          expect(page).to have_selector("input[value='test@example.com']")
          expect(ContactMailer.deliveries.count).to eq 0
        end
      end
    end
  end

  describe 'ログイン後' do
    let(:user) { create(:user) }

    before { login_as(user) }

    context '正常系' do
      context 'お名前・メールアドレス・お問い合わせ内容を入力した場合' do
        it 'お問い合わせが成功し、ユーザーと管理者にメールが送信されていること' do
          visit root_path
          click_on 'お問い合わせ'
          expect(page).to have_current_path new_contact_path
          fill_in 'お名前', with: 'テストユーザー'
          fill_in 'メールアドレス', with: 'test@example.com'
          fill_in 'お問い合わせ内容', with: 'テストお問い合わせ内容'
          click_on '送信'
          expect(page).to have_current_path new_contact_path
          expect(page).to have_content 'お問い合わせを受付しました'
          user_mail = ContactMailer.deliveries.first
          expect(user_mail.subject).to eq 'お問い合わせを受け付けました'
          expect(user_mail.from).to eq(['yasu6491@icloud.com'])
          expect(user_mail.to).to eq(['test@example.com'])
          expect(user_mail.body).to match '以下の内容でお問い合わせを受け付けました。'
          expect(user_mail.body).to match 'メールアドレス：test@example.com'
          expect(user_mail.body).to match 'お名前：テストユーザー'
          expect(user_mail.body).to match 'お問い合わせ内容：テストお問い合わせ内容'
          admin_mail = ContactMailer.deliveries.last
          expect(admin_mail.subject).to eq 'お問い合わせがありました'
          expect(admin_mail.from).to eq(['yasu6491@icloud.com'])
          expect(admin_mail.to).to eq(['yasu6491@icloud.com'])
          expect(admin_mail.body).to match 'お問い合わせがありました。'
          expect(admin_mail.body).to match 'メールアドレス：test@example.com'
          expect(admin_mail.body).to match 'お名前：テストユーザー'
          expect(admin_mail.body).to match 'お問い合わせ内容：テストお問い合わせ内容'
        end
      end
    end

    context '異常系' do
      context 'お名前・メールアドレス・お問い合わせ内容を入力しなかった場合' do
        it 'お問い合わせが失敗し、ユーザーと管理者にメールが送信されていないこと' do
          visit root_path
          click_on 'お問い合わせ'
          expect(page).to have_current_path new_contact_path
          click_on '送信'
          expect(page).to have_content 'お問い合わせに失敗しました'
          expect(page).to have_content 'お名前を入力してください'
          expect(page).to have_content 'メールアドレスを入力してください'
          expect(page).to have_content 'お問い合わせ内容を入力してください'
          expect(ContactMailer.deliveries.count).to eq 0
        end
      end

      context 'お問い合わせ内容のみを入力しなかった場合' do
        it 'お問い合わせが失敗し、お名前・メールアドレスがフォームに入力されていること' do
          visit root_path
          click_on 'お問い合わせ'
          expect(page).to have_current_path new_contact_path
          fill_in 'お名前', with: 'テストユーザー'
          fill_in 'メールアドレス', with: 'test@example.com'
          click_on '送信'
          expect(page).to have_content 'お問い合わせに失敗しました'
          expect(page).to have_content 'お問い合わせ内容を入力してください'
          expect(page).to have_selector("input[value='テストユーザー']")
          expect(page).to have_selector("input[value='test@example.com']")
          expect(ContactMailer.deliveries.count).to eq 0
        end
      end
    end
  end
end
