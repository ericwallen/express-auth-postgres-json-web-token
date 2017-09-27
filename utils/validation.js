const Joi = require('joi');

const signupUser = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    email: Joi.string().email().required()
})

const loginUser = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
})

module.exports = {
  signup: function(req, res, next) {
    const result = Joi.validate(req.body, signupUser)
    if (result.error) {
      res.json({error: result.error})
    } else {
      next()
    }
  },
  login: function(req, res, next) {
    const result = Joi.validate(req.body, loginUser)
    if (result.error) {
      res.json({error: result.error})
    } else {
      next()
    }
  }
}
