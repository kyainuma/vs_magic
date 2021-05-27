class ChangeWinShortcutKeysToShortcutKeys < ActiveRecord::Migration[6.0]
  def change
    rename_table :win_shortcut_keys, :shortcut_keys
  end
end
