const db = require("./dbConfig")

module.exports = {
    getUserId,
    signIn
}

function getUserId(user_id) {
    return db("sessions")
    .where({user_id}).first()
}

function signIn(user_id) {
    return db("sessions")
    .insert({user_id})
    .then(userIds => userIds[0])
}
