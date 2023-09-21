import mongoose from "mongoose";
<<<<<<< HEAD
const { Schema, model } = mongoose;
=======
const {Schema,model}=mongoose;
>>>>>>> 9df11cc248ac7fa963f1ccf8a8dcc4b193347e67
const reportSchema = new Schema({
  listing: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Listing",
    required: true,
  },
  reporter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Report = model("Report", reportSchema);
export default Report;
