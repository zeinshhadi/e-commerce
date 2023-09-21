const express=require('express');
const listingController=require('../controllers/listingController');
const router=express.Router();

// Create a new listing
router.post('/listings', listingController.createListing);

// Get all listings
router.get('/listings', listingController.getAllListings);

// Get a listing by ID
router.get('/listings/:listingId', listingController.getListingById);

// Update a listing by ID
router.put('/listings/:listingId', listingController.updateListingById);

// Delete a listing by ID
router.delete('/listings/:listingId', listingController.deleteListingById);

module.exports = router;
