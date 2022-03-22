const express = require('express')
const router = express.Router()
const {register, login, logout, google} = require('../controllers/authController')

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.get('/google', google)

module.exports = router;