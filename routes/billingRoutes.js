const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);



module.exports = (app) => {
  app.post('/api/stripe', (req,res) => {
    stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: 'Purchase of 5 Credits',
      source: req.body.id
    });
  });
};
