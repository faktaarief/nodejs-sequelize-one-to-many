const dbConfig = require('../config/db.config')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,

  pool: {
    max: dbConfig.max,
    min: dbConfig.min,
    acquire: dbConfig.acquire,
    idle: dbConfig.idle
  }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.tutorials = require('./tutorial.model')(sequelize, Sequelize)
db.comments = require('./comment.model')(sequelize, Sequelize)

db.tutorials.hasMany(db.comments, { as: 'comments' })
db.comments.belongsTo(db.tutorials, {
  foreignKey: 'tutorial_id',
  as: 'tutorial'
})

module.exports = db
