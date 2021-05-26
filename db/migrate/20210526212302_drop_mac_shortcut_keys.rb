class DropMacShortcutKeys < ActiveRecord::Migration[6.0]
  def change
    drop_table :mac_shortcut_keys
  end
end
