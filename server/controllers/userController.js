const { StatusCodes } = require('http-status-codes');
const {NotFoundError, BadRequestError, UnAuthenticatedError} = require('../errors');
const User = require('../models/user');
const path = require('path')
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

const coverImage = async (req, res) => {
    if(!req.files){
        throw new NotFoundError("Please select a file.")
    }
    const coverImage = req.files.image
    if (!coverImage.mimetype.startsWith("image")){
        throw new BadRequestError("Please upload a valid image")
    }
    let imageSize = 1024*1024;
    if (coverImage.size > imageSize){
        throw new BadRequestError("Image should not be mre than 1MB")
    }
    let coverImageURL = path.join(__dirname, "../images/coverImages/" + `${coverImage.name}`)
    await coverImage.mv(coverImageURL);
    res.status(StatusCodes.OK).json({coverImage: `/coverImages/${coverImage.name}`})
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
    coverImage,
    getCurrentUser,
    updateUser,
    updateUserPassword,
    getSingleUser,
}