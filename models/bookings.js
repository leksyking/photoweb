const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
event: {
    type: mongoose.Types.ObjectId,
    ref: 'Event',
    required: true
},
booker: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
}
}, {timestamps: true});

module.exports = mongoose.model('Booking', bookingSchema)