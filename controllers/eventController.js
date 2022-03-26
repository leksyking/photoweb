const { StatusCodes } = require('http-status-codes')
const Event = require('../models/event')
const {checkPermission} = require('../utils')

const createEvent = async (req, res) => {
    req.body.createdBy = req.user.userId;
    const event = await Event.create(req.body)
    res.status(StatusCodes.CREATED).json({event});
}
//optional
const getAllEvents = async (req, res) => {
    const event = await Event.find({})
    res.status(StatusCodes.CREATED).json({event});
}
const getSingleEvent = async (req, res) => {
    const {id: eventId} = req.params;
    const event = await Event.findOne({_id: eventId})
    res.status(StatusCodes.CREATED).json({event});
}
const UpdateEvent = async (req, res) => {
    const {id: eventId} = req.params;
    const {title, description, price, date} = req.body;
    const event = await Event.findOne({_id: eventId});
    checkPermission(req.user, event.createdBy);
    event.title = title;
    event.description = description;
    event.price = price;
    event.date = date;
    await event.save()
    res.status(StatusCodes.CREATED).json({event});
}
const deleteEvent = async (req, res) => {
    const {id: eventId} = req.params;
    const event = await Event.findOne({_id: eventId});
    checkPermission(req.user, event.createdBy);
    await event.remove();
    res.status(StatusCodes.CREATED).json({event});
}

module.exports = {
    createEvent,
    getAllEvents,
    getSingleEvent,
    UpdateEvent,
    deleteEvent
}