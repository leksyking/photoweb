const User = require('../models/user')
const {StatusCodes} = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')
const {createTokenUser, attachCookiesToResponse} = require('../utils')
const passport = require('passport')

//google controller
const google = passport.authenticate('google', { scope: ['profile'] });

const googleNext = passport.authenticate('google', { failureRedirect: '/api/v1/auth/login' })
const funcNext =  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
};

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
    attachCookiesToResponse({res, user: tokenUser})
    res.status(StatusCodes.CREATED).json({tokenUser})
}

const login = async(req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        throw new BadRequestError('Please provide your email and password')
    }
    const user = await User.findOne({email})
    if(!user){
        throw new NotFoundError("Invalid Email");
    }
    const isPassword = await user.comparePassword(password)
    if(!isPassword){
        throw new BadRequestError('invalid password')
    }

    const tokenUser = createTokenUser(user);
    attachCookiesToResponse({res, user: tokenUser})
    res.status(StatusCodes.OK).json({tokenUser})
}

const logout = async(req, res) => {
    res.cookie('token', 'logout', {
        httpOnly: true,
        expires: new Date(Date.now() + 1000)
    })
    res.status(StatusCodes.OK).json({msg: 'User is logged out.'})
}

module.exports = {
    register,
    login,
    logout,
    google,
    googleNext,
    funcNext
}