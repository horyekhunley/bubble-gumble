const express = require('express')
const dbConn = require('./db/db')
const Book = require('./models/employeeModel')

//routes
const employeeRoutes = require('./routes/employeeRoutes')

const app = express()
//middleware config
app.use(express.json())

//db config
dbConn()
//use imported routes
app.use('/api/employees', employeeRoutes)

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})