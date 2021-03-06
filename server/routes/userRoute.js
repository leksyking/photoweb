const express = require('express')
const router = express.Router();

const {getSingleUser, getCurrentUser, updateUser, updateUserPassword, coverImage} = require('../controllers/userController');
const authenticationMiddleware = require('../middlewares/authentication')

router.patch('/update-password', authenticationMiddleware, updateUserPassword)
router.get('/getCurrentUser', authenticationMiddleware, getCurrentUser)
router.patch('/update-user', authenticationMiddleware, updateUser)
router.post('/cover-image', authenticationMiddleware, coverImage)
router.get('/:id', authenticationMiddleware, getSingleUser)



module.exports = router;