
const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Ticket = require('./ticket');

const Payment = sequelize.define('Payment', {
  paymentId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  paymentMethod: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  ticketId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Ticket', 
      key: 'ticketId',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  
 
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  createdBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  updatedBy: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: true,
  tableName: 'Payment',
});

Payment.belongsTo(Ticket, { foreignKey: 'ticketId' });

module.exports = Payment;
