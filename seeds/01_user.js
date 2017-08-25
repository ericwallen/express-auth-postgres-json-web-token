const bcrypt = require('bcrypt');


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 1;')

   .then(function(){

     var hash = bcrypt.hashSync('password', 8)

       var userData = [{
         name: 'Batman',
         username: 'battybatbat',
         email: 'darkness@pitchblack.ceo',
         password: hash,
       },{
         name: 'Superman',
         username: 'lazereys',
         email: 'super@man.com',
         password: hash,
       },{
         name: 'Wonder Woman',
         username: 'heyheynow',
         email: 'women@kickass.com',
         password: hash,
       },{
         name: 'Captian America',
         username: 'merica',
         email: 'yeah@merica.com',
         password: hash,
          }]
      return knex('user').insert(userData)
    })

}
