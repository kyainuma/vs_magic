require 'rails_helper'

RSpec.describe 'Lesson', type: :system do
  let!(:shortcut_key) { create_list(:shortcut_key, 10) }

  it 'Lesson一覧が表示されること' do
    visit root_path
    within 'header' do
      click_on 'Lesson'
    end
    expect(page).to have_current_path lessons_path
    expect(page).to have_selector 'h1', text: 'Lesson'
    expect(page).to have_content 'test_display_key_1'
    expect(page).to have_content 'test_question_1'
    within 'tbody' do
      expect(page.all('tr').count).to eq 10
    end
  end

  it 'Lesson詳細が表示されること' do
    visit lesson_path(shortcut_key.first)
    expect(page).to have_content shortcut_key.first.display_key
    expect(page).to have_content shortcut_key.first.question
    expect(page).to have_selector "img[src$='/uploads/shortcut_key/image/#{shortcut_key.first.id}/no_image.gif']"
  end
end
