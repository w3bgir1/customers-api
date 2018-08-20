const Sequelize = require('sequelize')
const sequelize = require('../db')

const Customer = sequelize.define('customer', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  bio: {
    type: Sequelize.STRING,
    allowNull: false
  },
  addressLine1: Sequelize.STRING,
  addressLine2: Sequelize.STRING,
  city: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  tableName: 'customers'
})

Customer.sync()

module.exports = Customer