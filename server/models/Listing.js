const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  deviceCategory: { type: String, enum: ['Mobile', 'Laptop', 'Appliance', 'Accessory'], required: true },
  condition: { type: String, enum: ['Working', 'Repairable', 'Scrap'], required: true },
  batteryPresent: { type: Boolean, required: true },
  quantity: { type: Number, required: true },
  city: { type: String, required: true },
  description: String,
  
  // Auto-Assigned Fields (Rule-Based)
  hazardLevel: { type: String, default: 'Low' }, 
  recyclingType: { type: String, default: 'Reuse' },
  
  sellerContact: { type: String, required: true }, // Email or Phone
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Listing', ListingSchema);