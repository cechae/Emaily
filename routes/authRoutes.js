
const passport = require("passport"); // require passport npm module
// Send user to Google's "Gran Permission..." page.


// export below functions
module.exports = (app) => {

    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope:['profile', 'email']
        })
    );
    // when user gets redirected to auth, 
    // we have route handler that takes user's req
    // and do the code 'exchange'
    app.get('/auth/google/callback',passport.authenticate("google"));

    app.get('/api/logout', (req,res) => {
        req.logout();//kills the cookie.
        res.send(req.user);
    })



    app.get('/api/current_user', (req,res) => {
        res.send(req.user);
    })




}
