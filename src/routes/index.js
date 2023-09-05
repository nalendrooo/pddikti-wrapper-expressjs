const express = require('express')
const universityRoute = require('../routes/university')

const app = express()

app.use('/universitas', universityRoute)

module.exports = app
