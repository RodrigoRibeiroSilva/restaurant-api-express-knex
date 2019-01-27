module.exports = {

  development: {

    migrations: { tableName: 'knex_migrations' },
    seeds: { tableName: './seeds' },

    client: 'mysql',
    connection: {
      database: 'dev',
      user:     'root',
      password: ''
    }
  }
};
