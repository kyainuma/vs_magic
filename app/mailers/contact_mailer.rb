class ContactMailer < ApplicationMailer
  def send_user(contact)
    @contact = contact
    mail(
      to: contact.email,
      subject: 'お問い合わせを受け付けました'
    )
  end

  def send_admin(contact)
    @contact = contact
    mail(
      to: 'yasu6491@icloud.com',
      subject: 'お問い合わせがありました'
    )
  end
end
