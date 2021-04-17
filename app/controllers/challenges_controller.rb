class ChallengesController < ApplicationController
  def index
    # @shortcut_keys = ShortcutKey.where(id: 75)
    @shortcut_keys = ShortcutKey.order(Arel.sql('RAND()')).limit(10)
    @shortcut_keys_json = @shortcut_keys.to_json
  end
end
