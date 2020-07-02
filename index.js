const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// connect to mongoDB
mongoose.connect('mongodb://localhost/login',{ useUnifiedTopology: true, 
useNewUrlParser: true },() => console.log('Connected to DB'))

// Middlewares
app.use(bodyParser.json())
app.use('/api',require('./routes/api'))


app.get('/',(req,res) => res.send('Hello'))
app.listen(5000,() => console.log('Listening on port 5000'))