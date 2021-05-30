require 'rails_helper'

RSpec.describe 'Ranking', type: :system do
  describe '10件以上データが存在する場合' do
    it '10件しか表示されないこと' do
      create_list(:time_attack, 11)
      visit root_path
      click_on 'Ranking'
      expect(page).to have_current_path user_time_attacks_path
      expect(page).to have_selector 'h1', text: 'Ranking'
      within 'tbody' do
        expect(page.all('tr').count).to eq 10
      end
    end
  end
end
