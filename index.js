const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const { DB } = require("./config")
const cors = require('cors');


const PORT = 5000

const app = express()

app.use(cors());

app.use(express.json())

app.use("/auth", authRouter)

const start = async () => {
    try {
        await mongoose.connect(DB)
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()