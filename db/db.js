const express = require('express')
const mongoose = require('mongoose')


module.exports = () => {
    //database connection
    mongoose.connect('mongodb://localhost:27017/employee_records',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log('MongoDB connected...')
            }
        })
}

