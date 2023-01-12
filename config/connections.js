const Sequelize = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()

const sequelize = new Sequelize('ecommerce', process.env.DATABASE_USER,'Olabitan2017',{
    dialect: 'mysql',
    host:'localhost'
})

module.exports = sequelize;