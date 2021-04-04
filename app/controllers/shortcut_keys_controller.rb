class ShortcutKeysController < ApplicationController
  def index
    @shortcut_keys = ShortcutKey.all
    @shortcut_keys_json = @shortcut_keys.to_json
  end

  def show
    @shortcut_key = ShortcutKey.find(params[:id])
    @shortcut_key_json = @shortcut_key.to_json
  end
end
