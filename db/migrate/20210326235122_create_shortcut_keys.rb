class CreateShortcutKeys < ActiveRecord::Migration[6.0]
  def change
    create_table :shortcut_keys do |t|
      t.string :answer_key, null: false
      t.string :modifier_key
      t.string :question, null: false

      t.timestamps
    end
  end
end
