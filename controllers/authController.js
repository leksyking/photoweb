const register = async(req, res) => {
    res.send('Register Users')
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