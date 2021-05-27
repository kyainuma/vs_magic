class ApplicationController < ActionController::Base
  def set_os_type
    request.os == 'Mac OSX' ? 'Mac' : ''
  end
end
