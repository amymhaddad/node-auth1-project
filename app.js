const express = require("express")
const app = express()
const apiRouter = require("./routers/apiRouter")

const port = process.env.PORT || 3000

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
app.use("/api", apiRouter)

app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(port, () => {
    console.log("Running on port", port)
})
