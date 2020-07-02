const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/users',(req,res) => {
    User.find({}).then(user => res.send(user))
})

router.post('/users',(req,res) => {
    User.create(req.body).then(user => res.send(user))
})

module.exports = router