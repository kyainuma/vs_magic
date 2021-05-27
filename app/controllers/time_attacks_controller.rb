class TimeAttacksController < ApplicationController
  def index
    @shortcut_keys = ShortcutKey.new.time_attack_shortcut_keys(request.os)
    @shortcut_keys_json = @shortcut_keys.to_json
    @os = set_os_type
    @user_id = logged_in? ? current_user.id : 1
  end
end
