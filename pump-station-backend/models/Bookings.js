const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  station: {
    type: String,
    required: true
  },
  start:{
    type:String,
    required: true
  },
  end:{
    type:String,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }

});

module.exports = mongoose.model('Bookings', bookingSchema);