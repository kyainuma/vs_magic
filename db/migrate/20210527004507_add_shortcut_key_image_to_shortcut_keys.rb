class AddShortcutKeyImageToShortcutKeys < ActiveRecord::Migration[6.0]
  def change
    add_column :shortcut_keys, :image, :string
  end
end
