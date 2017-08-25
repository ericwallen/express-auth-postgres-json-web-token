// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgresql://localhost/example-db'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL + '?ssl-true'
  }
};
