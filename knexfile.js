module.exports = {

  development: {

    migrations: { directory: './src/database/migrations'},
    seeds: { directory: './src/database/seeds'},

    client: 'mysql',
    connection: {
      database: 'dev',
      user:     'root',
      password: ''
    }
  }
};
