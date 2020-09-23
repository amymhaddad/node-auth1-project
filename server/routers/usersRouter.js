const express = require("express")
const userRouter = express.Router()

const User = require("../data/userModel")
const Login = require("../data/loginModule")


userRouter.get("/", (req, res) => {
    
    const cookie = req.headers.cookie
    if (!cookie) {
        return res.status(401).json({ error: "Please log in with a valid username and password."})
    }
    
    const cookieAsArray = cookie.split("=")
    const userId = Number(cookieAsArray[cookieAsArray.length-1])
  
    Login.getUserId(userId)
    .then(user => {
        if (!user) {
            return res.status(403).json({ error: "Please log in with a valid username and password."})
        } 
        User.getUsers()
            .then(user => {
                return res.status(200).json(user)
            })
                  .catch(err => {
            return res.status(500).json({ error: "Server Error" })
        })  
    })

    .catch(err => {
        return res.status(500).json({ error: "Server Error" })
    })  
})

module.exports = userRouter;
