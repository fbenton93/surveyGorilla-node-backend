const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys.js');

const app = express();

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken) => {
  console.log(accessToken);
}));

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile','email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));
// passport will see 'code' in the URL and know this is not the first
// attempt to autheticate. It iwll try to exchange the code for a user profile





const PORT = process.env.PORT || 5000;
app.listen(PORT);
