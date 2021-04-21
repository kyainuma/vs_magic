class TimeAttacksController < ApplicationController
  def index
    @shortcut_keys = if request.os == 'Mac OSX'
                       MacShortcutKey.order(Arel.sql('RAND()')).limit(10)
                     else
                       WinShortcutKey.order(Arel.sql('RAND()')).limit(10)
                     end
    @shortcut_keys_json = @shortcut_keys.to_json
  end
end
