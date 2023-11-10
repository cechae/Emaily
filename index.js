const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
// require statement just makes sure "passport.js" code gets executed.
// No need to assign it in a variable.
const cookieSession = require('cookie-session');

require('./models/User'); // Import User model class!
require('./services/passport');

mongoose.connect(keys.mongoURI);
console.log(keys.mongoURI);
const app = express();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 DAYS in milliseconds before cookie expires.
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// when we require authRoutes file, it returns a "FUNCTION".
// then immediatley call that function with 'app' variable.
require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT);
