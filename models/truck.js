const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');

const TruckSchema = new mongoose.Schema({
  truckId: {
    type: String,
    required: [true, 'Please add a truck ID'],
    unique: true,
    trim: true,
    maxlength: [10, 'Truck ID must be less than 10 chars']
  },
  address: {
    type: String,
    required: [true, 'Please add an address']
  },
  location: {
    type: {
      type: String,
      enum: ['Point']
    },
    coordinates: {
      type: [Number],
      index: '2dsphere'
    },
    formattedAddress: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Geocode Create Location Based on Address
TruckSchema.pre('save', async function (next) {
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type: 'Point',
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress
  };

  // Prevents Address From Saving To DB
  this.address = undefined;
  next();
});

module.exports = mongoose.model('Truck', TruckSchema);