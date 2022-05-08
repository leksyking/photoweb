const express = require('express');
const router = express.Router();

const { getSingleEvent, createEvent, deleteEvent, UpdateEvent } = require('../controllers/eventController');
const authenticationMiddleware = require('../middlewares/authentication')

router.route('/')
.post(authenticationMiddleware, createEvent)


router.route('/:id')
.get(authenticationMiddleware, getSingleEvent)
.delete(authenticationMiddleware, deleteEvent)
.patch(authenticationMiddleware, UpdateEvent)



module.exports = router;