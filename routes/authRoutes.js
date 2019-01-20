const passport = require('passport');

module.exports = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile','email']
  }));

  app.get('/auth/google/callback', passport.authenticate('google'), (req,res) => {
    res.redirect('/surveys');
  } );
  // passport will see 'code' in the URL and know this is not the first
  // attempt to autheticate. It wll try to exchange the code for a user profile

  app.get('/api/logout', (req,res) => {
    req.logout();
    res.redirect('/');
  });


  app.get('/api/currentuser', (req,res) => {
    res.send(req.user);
  });
};
