const insertFormData= require('./sheetInsert')
const sendEmail =require('./sendEmail');
const insertCustomer = require('./insertCustomer');

async function getQuote (req,res){
    const formData = req.body;
    // Process the form data here
    try {
        const formData = req.body;
        await insertCustomer(formData);
        await sendEmail(formData);
        console.log('Form data received:', formData);
        res.send('Form data received and inserted into Database');
    } catch (error) {
        console.error('Error processing form data:', error);
        res.status(500).send('Internal server error');
    }
}

module.exports=getQuote;