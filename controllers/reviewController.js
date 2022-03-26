const Review = require('../models/review')
const {checkPermission}  = require('../utils')

const createReview = async (req, res) => {
    req.body.user = req.user.userId;
    const review = await Review.create(req.body)
    res.status(StatusCodes.CREATED).json({review})
}
const getAllReviews = async (req, res) => {
    const review = await Review.find({user: req.user.userId})
    res.status(StatusCodes.OK).json({review})
}
const getSingleReview = async (req, res) => {
    const {id: ReviewId} = req.params
    const review = await Review.findById(ReviewId)
    res.status(StatusCodes.OK).json({review})
}

const updateReview = async (req, res) => {
    const {id: ReviewId} = req.params
    const review = await Review.findById(ReviewId, req.body, {runValidators: true, new: true})
    checkPermission(req.user, review.user);
    res.status(StatusCodes.OK).json({review})
}
const deleteReview = async (req, res) => {
    const {id: ReviewId} = req.params;
    const review = await Review.findById(ReviewId)
    checkPermission(req.user, review.user);
    await review.remove();
    res.status(StatusCodes.OK).json({msg: 'Deleted Successully'})
}

module.exports = {
    createReview,
    getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview
}