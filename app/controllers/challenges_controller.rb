class ChallengesController < ApplicationController
  def index
    # @shortcut_keys = ShortcutKey.where(id: 92)
    @shortcut_keys = ShortcutKey.order(Arel.sql('RAND()')).limit(10)
    @shortcut_keys_json = @shortcut_keys.to_json
  end
end
