module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: '',
  DB: 'nodejs-sequelize-one-to-many',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}