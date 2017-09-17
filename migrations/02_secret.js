exports.up = function(knex, Promise) {
  return knex.schema.createTable('secret', (table) =>{
    table.increments()
    table.text('description')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user')
}
