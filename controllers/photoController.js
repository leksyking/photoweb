const Photo = require('../models/photographs')
const {StatusCodes} = require('http-status-codes');
const { checkPermission } = require('../utils');

const createPhoto = async (req, res) => { 
    req.body.user = req.user.userId;
    const photo = await Photo.create(req.body);
    res.status(StatusCodes.CREATED).json({photo})
}

const getSinglePhoto = async (req, res) => {
    const {id: photoId} = req.params;
    const photo = await Photo.findOne({_id: photoId})
    res.status(StatusCodes.OK).json({photo})
}

//get photos related to a single person
const getSinglePersonPhotos = async (req, res) => {
    const {id: userId} = req.params;
    const photo = await Photo.find({user: userId});
    res.status(StatusCodes.OK).json({photo})
}

const getAllPhotos = async (req, res) => {
    const photo = await Photo.find({})
    res.status(StatusCodes.OK).json({photo, nbHits: photo.length})
}
const uploadPhoto = async (req, res) => {
    console.log(req.files);
    res.status(StatusCodes.OK).json(ok)
}
const updatePhoto = async (req, res) => {
    const {image, name, description, category } = req.body;
    const {id: photoId} = req.params;
    const photo = await Photo.findOne({_id: photoId})
    checkPermission(req.user, photo.user);
    photo.image = image;
    photo.description  = description;
    photo.category = category;
    photo.name = name;
    await photo.save()
    res.status(StatusCodes.OK).json({photo})
}
const deletePhoto = async (req, res) => { 
    const {id: photoId} = req.params;
    const photo = await Photo.findById(photoId)
    checkPermission(req.user, photo.user)
    await photo.remove();
    res.status(StatusCodes.OK).json({msg: 'Photo deleted successfully'})
}


module.exports = {
    createPhoto,
    getSinglePhoto,
    getSinglePersonPhotos,
    getAllPhotos,
    updatePhoto,
    uploadPhoto,
    deletePhoto
}