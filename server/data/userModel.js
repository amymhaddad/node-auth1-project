const db = require("./dbConfig")

module.exports = {
    getUsers,
    getUser,
    addNewUser

}

function getUsers() {
    return db("users")
}

function getUser(username) {
    return db("users")
    .where({username}).first()
}

function addNewUser(newUser) {
    return db("users")
    .insert(newUser)
}
