
var knex = require('./connection')

module.exports = {
  getUsers: function(){
    return knex('user').select()
  }
}
