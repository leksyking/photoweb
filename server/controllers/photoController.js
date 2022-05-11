const Photo = require('../models/photographs')
const {StatusCodes} = require('http-status-codes');
const { checkPermission } = require('../utils');
const { BadRequestError, NotFoundError } = require('../errors');
const path = require('path')

const createPhoto = async (req, res) => { 
    req.body.user = req.user.userId;
    const photo = await Photo.create(req.body);
    res.status(StatusCodes.CREATED).json({photo})
}

const getSinglePhoto = async (req, res) => {
    const {id: photoId} = req.params;
    const photo = await Photo.findOne({_id: photoId})
    if(!photo){
        throw new NotFoundError(`No photo wih id: ${photoId}`)
    }
    res.status(StatusCodes.OK).json({photo})
}

//get photos related to a single person
const getSinglePersonPhotos = async (req, res) => {
    const {id: userId} = req.params;
    const photo = await Photo.find({user: userId});
    if(!photo){
        throw new NotFoundError(`No photo wih id: ${photoId}`)
    }
    res.status(StatusCodes.OK).json({photo})
}

const getAllPhotos = async (req, res) => {
    const photo = await Photo.find({})
    res.status(StatusCodes.OK).json({photo, nbHits: photo.length})
}

const uploadPhoto = async (req, res) => {
    if(!req.files){
        throw new NotFoundError("Please select a file.")
    }
    const uploadedFile = req.files.image;
    if(!uploadedFile.mimetype.startsWith('image')){
        throw BadRequestError('Please upload a valid image')
    }
    const maxSize = 1024 * 1024;
    if(uploadedFile.size > maxSize){
        throw new BadRequestError('Image should not be more than 1MB')
    }
    const imagePath = path.join(__dirname, '../images/uploads/' + `${uploadedFile.name}`)
    await uploadedFile.mv(imagePath)
    res.status(StatusCodes.OK).json({image: `/uploads/${uploadedFile.name}`})
}

const updatePhoto = async (req, res) => {
    const {image, name, description, category } = req.body;
    const {id: photoId} = req.params;
    const photo = await Photo.findOne({_id: photoId})
    if(!photo){
        throw new NotFoundError(`No photo wih id: ${photoId}`)
    }
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
    if(!photo){
        throw new NotFoundError(`No photo wih id: ${photoId}`)
    }
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