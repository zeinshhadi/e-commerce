const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const User = require("./models/user.js");
const orderItemSchema = new mongoose.Schema({
  listing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Listing",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema({
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [orderItemSchema],

  shippingAddress: String,
  orderDate: {
    type: Date,
    default: Date.now,
  },
  feedback: String,
});

module.exports = mongoose.model("Order", orderSchema);
