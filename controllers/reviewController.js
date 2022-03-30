const Review = require('../models/review')
const {checkPermission}  = require('../utils')
const User = require('../models/user');
const { BadRequestError } = require('../errors');
const {StatusCodes} = require('http-status-codes')

const createReview = async (req, res) => {
    const {photographer: photographerId } = req.body;
    const validPhotographer = await User.findOne({_id: photographerId});
    if(!validPhotographer){
        throw new BadRequestError(`No user with id: ${photographerId}`)
    }
    const validReview = await Review.findOne({user: req.user.userId, photographer: photographerId})
    if(validReview){
        throw new BadRequestError('You submitted a review already')
    }
    req.body.user = req.user.userId;
    const review = await Review.create(req.body)
    res.status(StatusCodes.CREATED).json({review})
}
const getSingleReview = async (req, res) => {
    const {id: ReviewId} = req.params
    const review = await Review.findById(ReviewId)
    if(!review){
        throw new NotFoundError(`No review wih id: ${reviewId}`)
    }
    res.status(StatusCodes.OK).json({review})
}

const updateReview = async (req, res) => {
    const {rating, comment} = req.body;
    const {id: ReviewId} = req.params
    const review = await Review.findById(ReviewId)
    if(!review){
        throw new NotFoundError(`No review wih id: ${reviewId}`)
    }
    checkPermission(req.user, review.user);
    review.rating = rating;
    review.comment = comment;
    await review.save();
    res.status(StatusCodes.OK).json({review})
}
const deleteReview = async (req, res) => {
    const {id: ReviewId} = req.params;
    const review = await Review.findById(ReviewId)
    if(!review){
        throw new NotFoundError(`No review wih id: ${reviewId}`)
    }
    checkPermission(req.user, review.user);
    await review.remove();
    res.status(StatusCodes.OK).json({msg: 'Deleted Successully'})
}

module.exports = {
    createReview,
    getSingleReview,
    updateReview,
    deleteReview
}