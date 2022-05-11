const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const findOrCreate = require('mongoose-findorcreate')


const UserSchema = new mongoose.Schema({
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
        required: [true, 'Please Provide your Email'],
        unique: true,
        index:true, 
        unique:true,
        sparse:true,
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email'
        }
    },
    description: {
        type: String
    },
    username: {
        type: String,
        required: [true, 'Please Provide your Username']
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    zip: {
        type: String
    },
    password: {
        type: String,
        required: [true, 'Please Provide your password']
    },
    shootDetails: {
        type: []
    },
    whatsapp: {
        type: String
    },
    facebook: {
        type: String
    },
    linkedIn: {
        type: String
    },
    twitter: {
        type: String
    },
    googleId:{
        type: String,  
        index:true, 
        unique:true,
        sparse:true
    } 
}, {timestamps: true, toJSON: {virtuals: true}, toObject: {virtuals: true}});

UserSchema.virtual('events', {
    ref: 'Event',
    localField: '_id',
    foreignField:'createdBy',
    justOne: false
})

UserSchema.virtual('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField:'photographer',
    justOne: false
})
UserSchema.pre('save', async function(){
    if(!this.isModified('password')) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
});

UserSchema.methods.comparePassword = async function(enteredPassword){
    const isMatch = await bcrypt.compare(enteredPassword, this.password)
    return isMatch
};
UserSchema.plugin(findOrCreate);

const User = mongoose.model('User', UserSchema);

module.exports = User;