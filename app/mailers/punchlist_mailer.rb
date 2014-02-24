class PunchlistMailer < ActionMailer::Base
  	layout "list_mailer"

  	def export(recipient_email, item_array, project)
  		@recipient = User.where(:email => recipient_email).first
  		@recipient = Sub.where(:email => recipient_email).first unless @recipient
  		@project = project
  		@item_array = item_array
  		mail(
      		:subject => "Worklist Items",
      		:to      => recipient_email,
      		:from 	 => "support@buildhawk.com",
      		:tag     => 'Worklist Export'
    	)
  	end
end
