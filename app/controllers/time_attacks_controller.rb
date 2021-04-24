class TimeAttacksController < ApplicationController
  def index
    @shortcut_keys = if request.os == 'Mac OSX'
                       MacShortcutKey.order(Arel.sql('RAND()')).limit(10)
                     else
                       WinShortcutKey.order(Arel.sql('RAND()')).limit(10)
                     end
    @shortcut_keys_json = @shortcut_keys.to_json
    @os = request.os == 'Mac OSX' ? 'Mac' : ''
    @user_id = logged_in? ? current_user.id : 1
  end
end
