const mongoose = require("mongoose");
const {Schema} = mongoose;

userSchema = new Schema({
    googleId: String,

})

mongoose.model("users", userSchema);// loads Schema into Mongoose