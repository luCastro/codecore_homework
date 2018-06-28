// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'superTeam',
      username: "luciana",
      password: "lu1234"
      },
      migrations: {
        tableName: "knex_migrations",
        directory: "./db/migrations"
    }
  }
};
