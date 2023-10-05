const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  images: [
    {
      type: String, // Assuming image URLs as strings
    },
  ],
});

const Category = model("Category", categorySchema);
module.exports = Category;
