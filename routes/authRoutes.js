const passport = require('passport'); // require passport npm module
// Send user to Google's "Gran Permission..." page.

// export below functions
module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );
  // when user gets redirected to auth,
  // we have route handler that takes user's req
  // and do the code 'exchange'
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout(); //kills the cookie.
    res.redirect('/');
  });

  //whenever app boots up, we will call this to figure out if user is signed in.
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
