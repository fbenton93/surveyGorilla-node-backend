const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin.js');

stripe.setPublishableKey(keys.stripePublishableKey);



module.exports = (app) => {
  app.post('/api/stripe', requireLogin, async (req,res) => {

    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: 'Purchase of 5 Credits',
      source: req.body.id
    });

    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
