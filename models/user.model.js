import mongoose from "mongoose";


// SCHEMA
const userSchema = new mongoose.Schema({
  name : String,
  number : Number,
  email : String
});


// MODEL
const User = mongoose.model("User", userSchema);

export default User;