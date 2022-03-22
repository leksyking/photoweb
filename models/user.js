const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Please Provide your First Name']
    },
    lastName: {
        type: String,
        required: [true, 'Please Provide your Last Name']
    },
    email: {
        type: String,
        required: [true, 'Please Provide your Email']
    },
    description: {
        type: String,
        required: [true, 'Please Provide the description']
    },
    username: {
        type: String,
        required: [true, 'Please Provide your Username']
    },
    state: {
        type: String,
        required: [true, 'Please Provide ']
    },
    city: {
        type: String,
        required: [true, 'Please Provide your First Name']
    },
    zip: {
        type: String,
        required: [true, 'Please Provide your First Name']
    },
    password: {
        type: String,
        required: [true, 'Please Provide your password']
    },
    shootDetails: {
        type: [],
        required: [true, 'Please pick your shoot details']
    },
    whatsapp: {
        type: String,
        required: [true, 'Please Provide your whatsapp link']
    },
    facebook: {
        type: String,
        required: [true, 'Please Provide your facebook link']
    },
    linkedIn: {
        type: String,
        required: [true, 'Please Provide your linkedIn link']
    },
    twitter: {
        type: String,
        required: [true, 'Please Provide your twitter link']
    },
    
});

const User = mongoose.model('User', userSchema);

module.exports = User;