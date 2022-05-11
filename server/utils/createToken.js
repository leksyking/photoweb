const createTokenUser = (user) => {
    return {userId: user._id, username: user.username}
}

module.exports = createTokenUser;