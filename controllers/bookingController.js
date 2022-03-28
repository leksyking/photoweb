const Booking = require('../models/bookings')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, NotFoundError} = require('../errors')
const {checkPermission} = require('../utils')

const bookAnEvent = async (req, res) => {
    const {event: eventId} = req.body;
    if(!eventId){
        throw new BadRequestError("Please enter the required fields")
    }
    //check if event exists
    const event = await Event.findById(eventId)
    if(!event){
        throw new NotFoundError(`No event with id: ${eventId}`)
    }
    req.body.booker = req.user.userId;
    const booking = await Booking.create(req.body)
    res.status(StatusCodes.CREATED).json({booking})
}
const showABooking = async (req, res) => {
    const {id: bookingId} = req.params;
    const booking = await Booking.findById(bookingId).populate('event')
    if(!booking){
        throw new NotFoundError(`No booking with id: ${bookingId}`)
    }
    res.status(StatusCodes.CREATED).json({booking})
}
const cancelABooking = async (req, res) => {
    const {id: bookingId} = req.params;
    const booking = await Booking.findById(bookingId)
    if(!booking){
        throw new NotFoundError(`No booking with id: ${bookingId}`)
    }
    checkPermission(req.user, booking.booker)
    await booking.remove();
    res.status(StatusCodes.CREATED).json({msg: "Booked event removed"})

}

module.exports = {
    bookAnEvent,
    showABooking,
    cancelABooking
}