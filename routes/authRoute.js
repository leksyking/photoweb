const express = require('express')
const router = express.Router()
const {register, login, logout, google, googleNext, funcNext} = require('../controllers/authController')
const passport = require('passport')

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.get('/google', google)
router.get('/google/photoWeb', googleNext, funcNext)

 
module.exports = router;