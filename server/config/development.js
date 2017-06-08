const port = Number.parseInt(process.env.PORT) || 5432;

module.exports = {
  port: port,
  hostName: 'http://localhost:' + 4000,
  dialect: "postgres",
  username: process.env.DATABASE_USERNAME_DEV || 'postgres',
  password: process.env.DATABASE_PASSWORD_DEV || '123456',
  database: 'miori',
  host: process.env.DATABASE_HOST_DEV || '127.0.0.1',
};