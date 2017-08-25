const express = require('express')
const router = express.Router()
const knex = require('../db/connection')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const queries = require('../db/queries')


router.get('/users', function(req, res){
  queries.getUsers()
    .then(function (result){
      res.json(result)
    })
})

module.exports = router
