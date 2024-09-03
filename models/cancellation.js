
const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Ticket = require('./ticket');
<<<<<<< HEAD
// Amitesh: why created at and update at is missing
=======
// Amitesh: why created at and update at is missing 
>>>>>>> 02e36f4af3a378529ec4c0d70b54cb1cae0d724c
const Cancellation = sequelize.define('Cancellation', {
  cancellationId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ticketId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Ticket', 
      key: 'ticketId',
    },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  },
  cancellationDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: true,
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
  tableName: 'Cancellation',
});

Cancellation.belongsTo(Ticket, { foreignKey: 'ticketId' });

module.exports = Cancellation;
