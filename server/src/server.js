const express = require('express')
const mongoose = require('mongoose')
const usersRouter = require('./routes/users-router')
let cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/users', usersRouter)


app.use((req, res, next)=>{
    res.status(404).json('Page not found 404')
})

async function start() {
    await mongoose.connect(MONGO_URL)
    app.listen(PORT, ()=>{
        console.log(`server is running on port ${PORT}`)
    })
}

start()