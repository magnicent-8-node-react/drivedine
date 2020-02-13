const mongoose = require('mongoose');

//
const TruckSchema = new mongoose.Schema({
    // truckId: {
    //   type: String,
    //   required: [true, 'Please add a truck ID'],
    //   unique: true,
    //   trim: true,
    //   maxlength: [10, 'Truck ID must be less than 10 chars']
    // },
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

module.exports = mongoose.model('Truck', TruckSchema); 