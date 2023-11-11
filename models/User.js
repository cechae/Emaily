const mongoose = require('mongoose');
const { Schema } = mongoose;

userSchema = new Schema({
  googleId: String,
  credits: { type: Number, default: 0 },
});

mongoose.model('users', userSchema); // loads Schema into Mongoose
