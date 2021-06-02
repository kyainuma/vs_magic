class ApplicationController < ActionController::Base
  add_flash_types :success, :info, :warning, :danger

  private

    def set_os_type
      request.os == 'Mac OSX' ? 'Mac' : ''
    end

    def not_authenticated
      flash[:warning] = t('defaults.message.require_login')
      redirect_to main_app.login_path
    end
end
