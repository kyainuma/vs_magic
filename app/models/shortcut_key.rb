class ShortcutKey < ApplicationRecord
  mount_uploader :image, ShortcutKeyImageUploader

  validates :answer_key, presence: true, length: { maximum: 255 }
  validates :modifier_key, length: { maximum: 255 }
  validates :question, presence: true, length: { maximum: 255 }
  validates :display_key, presence: true, length: { maximum: 255 }
  validates :os_type, presence: true

  enum os_type: { Mac: 0, Windows: 1 }

  def time_attack_shortcut_keys(os_type)
    if os_type == 'Mac OSX'
      ShortcutKey.where(os_type: 'Mac').order(Arel.sql('RAND()')).limit(10)
    else
      ShortcutKey.where(os_type: 'Windows').order(Arel.sql('RAND()')).limit(10)
    end
  end

  def lessons_shortcut_keys(os_type)
    if os_type == 'Mac OSX'
      ShortcutKey.where(os_type: 'Mac')
    else
      ShortcutKey.where(os_type: 'Windows')
    end
  end
end
