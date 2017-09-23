const express = require('express')
const router = express.Router()
const knex = require('../db/connection')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const queries = require('../db/queries')
require('dotenv').config()

router.get('/users', function(req, res){
  queries.getUsers()
    .then(function (result){
      res.json(result)
    })
})

// Log in
router.post('/login', function(req, res, next) {
  knex('user').where('email', req.body.email)
    .then(user => {
      if (user.length === 0) {
        res.json({
          error: 'That user does not exist'
        })
      } else {
        var match = bcrypt.compareSync(req.body.password, user[0].password)
        if (match) {
          delete user[0].password
          var token = jwt.sign(user[0], process.env.TOKEN_SECRET);
          res.json({
            data: token
          })
        } else {
          res.json({
            error: 'Email or password did not match'
          })
        }
      }
    })
});





// Sign up
  router.post('/signup', function(req, res, next) {
  console.log(req.body);
  knex('user').select().where('email', req.body.email)
    .then(user => {
      if (user.length === 0) {
        var saltRounds = 10
        var hash = bcrypt.hashSync(req.body.password, saltRounds)
        req.body.password = hash
        knex('user').insert(req.body).returning('*')
          .then(user => {
            console.log(user)
            res.json({message: 'Sign up successful. ' + user[0].username + ' you can now log in with your chosen email & password'});
            res.json(user)
          })
      } else {
        res.json({error: 'Email already in use. Do you have an account already?'})
      }
    })
})



//busines by user from user dashboard
router.get('/secrets-by-user/:id', function(req, res){
    knex.from('user')
    .innerJoin('user_secret', 'user.noid', 'user_id')
    .where('user.id', req.params.id)
    .innerJoin('secret', 'secret_id', 'secret.id')
    .then(function(data){
      res.send(data);
    })
})




module.exports = router
