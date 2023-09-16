import mongoose from "mongoose";
const { Schema, model} = mongoose;
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  phoneNumber: {
    type: String,
    validate: {
      validator: function (v) {
        // Custom validation for phone number format (you can customize this)
        return /^\d{8}$/.test(v); // Assumes a 8-digit phone number
      },
      message: "Phone number must be a valid 8-digit number.",
    },
  },
  location: {
    type: String,
    required: true,
  },

  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Listing" }],
  purchases: [{ type: mongoose.Schema.Types.ObjectId, ref: "Listing" }],
});

const User = model("User", userSchema);
export default User;
