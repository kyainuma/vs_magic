class LessonsController < ApplicationController
  def index
    @shortcut_keys = if request.os == 'Mac OSX'
                       MacShortcutKey.all
                     else
                       WinShortcutKey.all
                     end
    @shortcut_keys_json = @shortcut_keys.to_json
  end

  def show
    @shortcut_key = if request.os == 'Mac OSX'
                      MacShortcutKey.find(params[:id])
                    else
                      WinShortcutKey.find(params[:id])
                    end
    @shortcut_key_json = @shortcut_key.to_json
    @os = request.os == 'Mac OSX' ? 'Mac' : ''
  end
end
