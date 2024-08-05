const Customer = require('../Models/Customer'); // Import the Customer model

// Controller to get customers
async function getCustomers(req, res) {
  try {
    const customers = await Customer.find(); // Fetch all customers from the database
    res.json(customers); // Send the customers as JSON response
  } catch (error) {
    console.error('Error fetching customers:', error);
    res.status(500).json({ message: 'Server Error' });
  }
}

module.exports = getCustomers;