const { StatusCodes } = require('http-status-codes');
const {NotFoundError, BadRequestError, UnAuthenticatedError} = require('../errors');
const User = require('../models/user');
const { createTokenUser, attachCookiesToResponse, checkPermission } = require('../utils');


const getSingleUser = async (req, res) => {
    const {id: userId} = req.params;
    // try using populate to access all reviews
    const user = await User.findOne({_id:userId}).populate({path: 'events reviews'}).select('-password')
    if(!user){
        throw new NotFoundError(`No user with id: ${userId}`)
    }
    res.status(StatusCodes.OK).json({user})
};

const getCurrentUser = async (req, res) => {
    res.status(StatusCodes.OK).json(req.user)
}

const updateUser = async (req, res) => {
    const user = await User.findOneAndUpdate({_id: req.user.userId}, req.body, {new: true, runValidators: true})
    const tokenUser = createTokenUser(user);
    attachCookiesToResponse({res, user: tokenUser})
    res.status(StatusCodes.OK).json({tokenUser})
}

const updateUserPassword = async (req, res) => {
    const {oldPassword, newPassword}= req.body;
    if(!oldPassword || !newPassword){
        throw new BadRequestError('Please provide the required passwords')
    }
    const user = await User.findOne({_id: req.user.userId})
    const isPassword = await user.comparePassword(oldPassword)
    console.log(isPassword);
    if(!isPassword){
        throw new UnAuthenticatedError("Incorrect Password")
    }
    user.password = newPassword;
    await user.save();
    res.status(StatusCodes.OK).json("Password changed successfully")
}


module.exports = {
  
    getCurrentUser,
    updateUser,
    updateUserPassword,
    getSingleUser,
}