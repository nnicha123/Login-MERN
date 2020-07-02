const express = require('express')
const app = express()
const mongoose = require('mongoose')

// connect to mongoDB
mongoose.connect('mongodb://localhost/login',{ useUnifiedTopology: true, 
useNewUrlParser: true },() => console.log('Connected to DB'))

app.get('/',(req,res) => res.send('Hello'))
app.listen(5000,() => console.log('Listening on port 5000'))