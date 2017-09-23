exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_secret', (table) =>{
    table.increments()
    table.integer('user_id').references('user.id').onDelete('CASCADE');
    table.integer('secret_id').references('secret.id').onDelete('CASCADE');
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_secret')
}
