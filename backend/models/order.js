const mongoose=require('mongoose');
const { Schema, model } = mongoose;

const orderItemSchema = new Schema({
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

const Order = model("Order", orderSchema);
module.exports=Order;
