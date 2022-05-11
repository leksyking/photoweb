const express = require('express');
const router = express.Router();

const authenticationMiddleware = require('../middlewares/authentication')
const {showABooking, cancelABooking, bookAnEvent} = require('../controllers/bookingController')

router.post('/', authenticationMiddleware, bookAnEvent)
router.route('/:id')
.get(authenticationMiddleware, showABooking)
.delete(authenticationMiddleware, cancelABooking)

module.exports = router;
