const express = require('express');
const router = express.Router();
const { deletePhoto, createPhoto, getSinglePersonPhotos, getSinglePhoto, uploadPhoto, getAllPhotos, updatePhoto } = require('../controllers/photoController');
const authenticationMiddleware = require('../middlewares/authentication')

router.route('/')
.post(authenticationMiddleware, createPhoto)
.get(getAllPhotos)

router.post('/upload-photo', authenticationMiddleware, uploadPhoto)

router.route('/:id')
.get(authenticationMiddleware, getSinglePhoto)
.delete(authenticationMiddleware, deletePhoto)
.patch(authenticationMiddleware, updatePhoto)
router.route('/:id/me').get(getSinglePersonPhotos)


module.exports = router;