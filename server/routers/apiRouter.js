const express = require("express")
const router = express.Router()

const usersRouter = require("./usersRouter")
const loginRouter = require("./loginRouter")
const registerRouter = require("./registerRouter")

router.use("/users", usersRouter)
router.use("/register", registerRouter)
router.use("/login", loginRouter)

module.exports = router;