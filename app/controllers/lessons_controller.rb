class LessonsController < ApplicationController
  def index
    @shortcut_keys = ShortcutKey.new.lessons_shortcut_keys(request.os)
    @shortcut_keys_json = @shortcut_keys.to_json
  end

  def show
    @shortcut_key = ShortcutKey.find(params[:id])
    @shortcut_key_json = @shortcut_key.to_json
    @os = set_os_type
  end
end
