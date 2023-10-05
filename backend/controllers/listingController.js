const Listing = require('../models/Listing');

// Controller to create a new listing
exports.createListing = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      category,
      seller,
      location,
      images,
    } = req.body;

    const newListing = new Listing({
      title,
      description,
      price,
      category,
      seller,
      location,
      images,
    });

    await newListing.save();
    res.status(201).json(newListing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller to get a single listing by ID
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
