const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const RailwayCompany = sequelize.define('RailwayCompany', {
  RailwayCompanyid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  headquarters: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  established_date: {
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
  tableName: 'RailwayCompany',
});

module.exports = RailwayCompany;
