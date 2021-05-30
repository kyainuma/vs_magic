require 'rails_helper'

RSpec.describe 'TimeAttack', type: :system do
  it 'TimeAttackページに遷移すること' do
    visit root_path
    within 'header' do
      click_on 'TimeAttack'
    end
    expect(page).to have_current_path time_attacks_path
    expect(page).to have_selector 'h1', text: 'TimeAttack'
  end
end
