const express = require('express')
const router = express.Router()
const {register, login, logout, google, googleNext, funcNext} = require('../controllers/authController')
const authenticationMiddleware = require('../middlewares/authentication')

router.post('/register', register)
router.post('/login', login)
router.post('/logout', authenticationMiddleware, logout)
router.get('/google', google)
router.get('/google/photoWeb', googleNext, funcNext)

 
module.exports = router;