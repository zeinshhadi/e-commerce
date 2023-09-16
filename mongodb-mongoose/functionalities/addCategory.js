import mongoose from "mongoose";
import Category from "../models/Category.js"; // Import the Category model
import '../connectDB.js';

// Create categories for your e-commerce website
const clothingCategory = new Category({
  name: "Clothing",
});

const womensClothingCategory = new Category({
  name: "Women's Clothing",
  parentCategory: clothingCategory._id, // Set the parent category
});

const mensClothingCategory = new Category({
  name: "Men's Clothing",
  parentCategory: clothingCategory._id, // Set the parent category
});

const mobileAccessoriesCategory = new Category({
  name: "Mobile & Accessories",
});

const mobilePhonesCategory = new Category({
  name: "Mobile Phones",
  parentCategory: mobileAccessoriesCategory._id, // Set the parent category
});

const mobileAccessoriesSubCategory = new Category({
  name: "Mobile Accessories",
  parentCategory: mobileAccessoriesCategory._id, // Set the parent category
});

const vehicleCategory = new Category({
  name: "Vehicles",
});

const carsForSaleCategory = new Category({
  name: "Cars for Sale",
  parentCategory: vehicleCategory._id, // Set the parent category
});

// Save the categories to the database
(async () => {
  try {
    await clothingCategory.save();
    await womensClothingCategory.save();
    await mensClothingCategory.save();
    await mobileAccessoriesCategory.save();
    await mobilePhonesCategory.save();
    await mobileAccessoriesSubCategory.save();
    await vehicleCategory.save();
    await carsForSaleCategory.save();

    console.log("Categories added successfully.");
  } catch (error) {
    console.error("Error adding categories:", error);
  } finally {
    mongoose.disconnect();
  }
})();

