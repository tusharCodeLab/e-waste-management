const express = require('express');
const router = express.Router();
const Listing = require('../models/Listing');
const classifyWaste = require('../utils/classifier');

// POST: Create Listing (Seller)
router.post('/', async (req, res) => {
  const { deviceCategory, condition, batteryPresent, ...rest } = req.body;
  
  // AUTO-CLASSIFICATION (No AI)
  const classification = classifyWaste(deviceCategory, condition, batteryPresent);

  const newListing = new Listing({
    deviceCategory,
    condition,
    batteryPresent,
    ...rest,
    hazardLevel: classification.hazardLevel,
    recyclingType: classification.recyclingType
  });

  try {
    const savedListing = await newListing.save();
    res.status(201).json(savedListing);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET: Fetch All (Buyer/Admin) - With Filters
router.get('/', async (req, res) => {
  const qCategory = req.query.category;
  try {
    let listings;
    if (qCategory) {
      listings = await Listing.find({ deviceCategory: qCategory });
    } else {
      listings = await Listing.find();
    }
    res.status(200).json(listings);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;