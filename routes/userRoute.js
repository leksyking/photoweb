const express = require('express')
const router = express.Router();

const {getSingleUser, updateUser, updateUserPassword} = require('../controllers/userController')