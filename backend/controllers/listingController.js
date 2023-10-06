const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Listing = require('../models/Listing'); // Import the Listing model
const Category = require('../models/Category'); // Import the Category model

// Controller to create a new listing
exports.createListing = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      categoryName,
      seller,
      location,
      images,
      quantityStock, // Include quantityStock in the destructuring
    } = req.body;

    // Find the category by name
    const category = await Category.findOne({ name: categoryName });

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    // Create the new listing using the category's ID
    const newListing = new Listing({
      title,
      description,
      price,
      category: category._id,
      seller,
      location,
      images,
      quantityStock, // Include quantityStock in the new listing
    });

    await newListing.save();
    res.status(201).json(newListing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Controller to get all listings
exports.getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find();
    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getListingsByCategory=async(req,res)=>{
  try {
    const category=req.body.category;
    const listings = await Listing.find({category:category});
    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getListingById = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.listingId);

    if (!listing) {
      return res.status(404).json({ message: 'Listing not found' });
    }

    res.status(200).json(listing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to update a listing by ID
exports.updateListingById = async (req, res) => {
  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.listingId,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedListing) {
      return res.status(404).json({ message: 'Listing not found' });
    }

    res.status(200).json(updatedListing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to delete a listing by ID
exports.deleteListingById = async (req, res) => {
  try {
    const deletedListing = await Listing.findByIdAndDelete(req.params.listingId);

    if (!deletedListing) {
      return res.status(404).json({ message: 'Listing not found' });
    }

    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
