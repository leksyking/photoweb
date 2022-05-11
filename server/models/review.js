const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating: Number,
    comment: String,
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    photographer:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Review', reviewSchema)