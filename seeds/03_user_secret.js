const bcrypt = require('bcrypt');


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "user_secret"; ALTER SEQUENCE user_secret_id_seq RESTART WITH 1;')

   .then(function(){

     var hash = bcrypt.hashSync('password', 8)

       var userData = [
         {
         user_id: 1,
         secret_id: 1
        },{
          user_id: 2,
          secret_id: 2
        },{
          user_id: 3,
          secret_id: 3
        },{
          user_id: 4,
          secret_id: 4
 },
       ]
      return knex('user_secret').insert(userData)
    })

}
