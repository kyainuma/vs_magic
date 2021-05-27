class AddRoleToShortcutKeys < ActiveRecord::Migration[6.0]
  def change
    add_column :shortcut_keys, :os_type, :integer, null: false, default: 1
  end
end
