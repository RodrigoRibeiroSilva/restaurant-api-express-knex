// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'test',
      user:     'root',
      password: ''
    },
    migrations: {
      tableName: 'product'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'production',
      user:     'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
