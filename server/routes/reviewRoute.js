const express = require('express');
const router = express.Router();
const {getSingleReview, createReview, updateReview, deleteReview} = require('../controllers/reviewController')
const authenticationMiddleware = require('../middlewares/authentication')

router.route('/')
.post(authenticationMiddleware, createReview)
router.route('/:id')
.patch(authenticationMiddleware, updateReview)
.get(authenticationMiddleware, getSingleReview)
.delete(authenticationMiddleware, deleteReview)

module.exports = router;