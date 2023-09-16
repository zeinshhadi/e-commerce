import mongoose from 'mongoose';
import User from './User';
import Admin from './admin';
const {Schema,model}=mongoose;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 100,
  },
  description: {
    type: String,
    required: true,
    maxlength: 500,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: [String], // Assuming it's an array of category tags
    required: true,
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String, // Assuming image URLs as strings
    },
  ],
  datePosted: {
    type: Date,
    default: Date.now,
  },

  adminApprovalStatus: {
    type: String,
    enum: ["pending", "approved", "denied"],
    default: "pending",
  },
  adminApprover: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Admin",
  },
});

const Listing=model("Listing",listingSchema);
export default Listing;
