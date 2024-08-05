const Customer = require("../Models/Customer");


async function insertCustomer (formData){

    try {
        const customerData = new Customer({
            firstName: formData.fname,
            lastName:   formData.lname,
            email: formData.email,
            phoneNumber: formData.phone,
            address: formData.address,
            personalQuote:formData.PersonalQuote,
            commercialQuote:  formData.CommercialQuote
        });
    
        await customerData.save();
        
      } catch (err) {
        console.log(err)
      }

}

module.exports=insertCustomer;