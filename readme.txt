// Assuming you've already imported the Category model and have a connection to your MongoDB database

// Create the top-level "Clothing" category
const clothingCategory = new Category({
  name: 'Clothing',
});

clothingCategory.save((err, savedClothingCategory) => {
  if (err) {
    console.error('Error creating Clothing category:', err);
    return;
  }

  // Create "Men's Clothing" as a child category
  const mensClothingCategory = new Category({
    name: "Men's Clothing",
    parentCategory: savedClothingCategory._id, // Set the parent to the _id of "Clothing"
  });

  mensClothingCategory.save((err) => {
    if (err) {
      console.error("Error creating Men's Clothing category:", err);
    } else {
      console.log("Categories created successfully.");
    }
  });

  // Create "Women's Clothing" as a child category
  const womensClothingCategory = new Category({
    name: "Women's Clothing",
    parentCategory: savedClothingCategory._id, // Set the parent to the _id of "Clothing"
  });

  womensClothingCategory.save((err) => {
    if (err) {
      console.error("Error creating Women's Clothing category:", err);
    } else {
      console.log("Categories created successfully.");
    }
  });
});
