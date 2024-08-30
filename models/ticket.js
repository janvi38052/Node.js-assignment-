
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Ticket = sequelize.define('Ticket', {
  ticketId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  passengerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Passenger', 
      key: 'passengerId',
    },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  },
  trainId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Train',
      key: 'trainId',
    },
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  },
  startTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  source: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destination: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  noOfSeats: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  dateTime: {
    type: DataTypes.DATE,
    allowNull: false,
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
  tableName: 'Ticket',
});

module.exports = Ticket;
