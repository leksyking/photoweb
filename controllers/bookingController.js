const Booking = require('../models/bookings')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, NotFoundError} = require('../errors')

const bookAnEvent = async (req, res) => {
    const {event: eventId, booker } = req.body;
    if(!eventId || booker){
        throw new BadRequestError("Please enter the required fields")
    }
    //check if event exists
    const event = await Event.findById(eventId)
    if(!event){
        throw new NotFoundError(`No event with id: ${eventId}`)
    }
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
    await booking.remove();
    res.status(StatusCodes.CREATED).json({msg: "Booked event removed"})

}

module.exports = {
    bookAnEvent,
    showABooking,
    cancelABooking
}