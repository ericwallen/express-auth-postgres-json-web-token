const bcrypt = require('bcrypt');


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "secret"; ALTER SEQUENCE secret_id_seq RESTART WITH 1;')

   .then(function(){

     var hash = bcrypt.hashSync('password', 8)

       var userData = [{
         description: 'I am not as dark and brooding as you think. For instance, I have a soft spot for fluffy dogs.',
       },{
         description: 'I am really a mutant from planet earth but I tell poeple I am an alien becuase it sounds cooler.',
       },{
         description: 'I do what I do but also enjoy a manicure from time to time.',
       },{
         description: 'Captain my captian. I am ready to retire. Do not tell anyone though!',
          }]
      return knex('secret').insert(userData)
    })

}
