const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const BookingAgent = sequelize.define('BookingAgent', {
    bookingAgentId: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    contactNumber: { 
        type: DataTypes.STRING(15),
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    agencyName: {
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
    tableName: 'BookingAgents', 
    timestamps: true,
});


BookingAgent.associate = function(models) {
    
};

module.exports = BookingAgent;
