
require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(formData) {
  try {
    const msg = {
      to: 'Info@ampremierins.com',
      from: 'Internal@ampremierins.com',
      templateId: 'd-e6ef58cef10b4a75a957786cff8f0e8f',  
      
      dynamic_template_data: {
        fname: formData.fname,
        lname: formData.lname,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        PersonalQuote: formData.PersonalQuote,
        CommercialQuote: formData.CommercialQuote
      }
    };

    await sgMail.send(msg);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error Sending email:', error);
  }
}

module.exports = sendEmail;
