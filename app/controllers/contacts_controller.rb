class ContactsController < ApplicationController
  skip_before_action :require_login

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      ContactMailer.send_user(@contact).deliver_now
      ContactMailer.send_admin(@contact).deliver_now
      redirect_to new_contact_path, success: t('.success')
    else
      flash.now[:danger] = t('.fail')
      render :new
    end
  end

  private

    def contact_params
      params.require(:contact).permit(:name, :email, :content)
    end
end
