const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys.js');
require('./models/User');
require('./services/passport.js');

// CONNECTING MONGODB TO MONGOOSE
mongoose.connect(keys.mongoURI);


// INITIALIZED EXPRESS SERVER
const app = express();


// MIDDLEWARES
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// ROUTES
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

// PRODUCTION-ONLY ROUTING CONFIGURATION
if(process.env.NODE_ENV === 'production') {
  // serving productions assets
  app.use(express.static('client/build'));
  // serving up index.html file if route is unrecognized
  const path = require('path');
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}


// SETTING EXPRESS ON PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT);
