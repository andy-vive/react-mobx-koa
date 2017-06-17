var database = {
  development: {
    username: process.env.DATABASE_USERNAME_DEV || 'postgres',
    password: process.env.DATABASE_PASSWORD_DEV || '123456',
    database: process.env.DATABASE_NAME_DEV || 'miori',
    host: process.env.DATABASE_HOST_DEV || '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  },
};

module.exports = database;