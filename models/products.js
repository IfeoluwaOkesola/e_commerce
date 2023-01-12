const Sequelize = require('sequelize')
const sequelize = require('../config/connections')

const Product = sequelize.define('product', {
    productid:{
        type: Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull: false,
        primaryKey:true
    },

    productName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    price:{
        type:Sequelize.STRING,
        allowNull:false
    },
    image:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    discountprice:{
        type:Sequelize.STRING,
        allowNull:true
    }

})

module.exports = {Product};