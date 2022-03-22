const User = require('../models/user')
const {StatusCodes} = require('http-status-codes')
const { BadRequestError } = require('../errors')
const {createTokenUser} = require('../utils')

const register = async(req, res) => {
    const {email} = req.body;
    //check if email exists already
    const existingEmail = await User.findOne({email})
    if(existingEmail){
        throw new BadRequestError('Email exists already')
    }
    //create a new user
    const user = await User.create(req.body)
    const tokenUser = createTokenUser(user);
    res.status(StatusCodes.CREATED).json({tokenUser})
}

const login = async(req, res) => {
    res.send('login Users')
}

const logout = async(req, res) => {
    res.send('logout Users')
}

module.exports = {
    register,
    login,
    logout
}