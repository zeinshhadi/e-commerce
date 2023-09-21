const Category = require("../models/Category.js");

exports.addCategory = async (req, res) => {
  try {
    const { name, parentCategory } = req.body;

    // Check if a category with the same name already exists
    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return res.status(400).json({ message: "Category already exists" });
    }

    // Create a new category
    const newCategory = new Category({ name, parentCategory });

    // Save the new category to the database
    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to delete a category by name
exports.deleteCategory = async (req, res) => {
  try {
    const { name } = req.params;

    // Check if the category exists
    const categoryToDelete = await Category.findOne({ name });

    if (!categoryToDelete) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Delete the category
    await Category.deleteOne({ name });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to update a category by name
exports.updateCategory = async (req, res) => {
  try {
    const { name } = req.params;
    const { newName, newParentCategory } = req.body;

    // Check if the category exists
    const categoryToUpdate = await Category.findOne({ name });

    if (!categoryToUpdate) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Update the category
    categoryToUpdate.name = newName || categoryToUpdate.name;
    categoryToUpdate.parentCategory = newParentCategory || categoryToUpdate.parentCategory;

    // Save the updated category to the database
    await categoryToUpdate.save();

    res.status(200).json(categoryToUpdate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to get all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
