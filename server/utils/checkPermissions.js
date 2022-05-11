const { UnAuthorizedError } = require("../errors");

const checkPermission = (requestUser, UserId) => {
    if(requestUser.userId === UserId.toString()) return;
    throw new UnAuthorizedError("You are not auhorized to access this route")
}
 

module.exports = checkPermission