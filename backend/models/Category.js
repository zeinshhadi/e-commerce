import mongoose from "mongoose";
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
});

const Category = model("Category", categorySchema);
export default Category;
