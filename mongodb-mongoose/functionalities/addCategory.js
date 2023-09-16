import Category from '../models/Category.js';
import "../connectDB.js";

const category1= await Category.create({
    name: "hanin",
});

console.log(category1);
await category1
  .save()
  .then(() => {
    console.log("category saved 2");
  })
  .catch((error) => {
    console.error("error", error);
  });
  const firstCategory = await Category.findOne({});
  console.log(firstCategory);