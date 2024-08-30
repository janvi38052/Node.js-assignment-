const { DataTypes } = require('sequelize');
const sequelize = require('../db'); 
const Passenger = require('./passenger'); 
const Train = require('./train'); 

const PassengerTrain = sequelize.define('PassengerTrain', {
    passengerId: {  
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Passenger', 
            key: 'passengerId'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    trainId: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Train',
            key: 'trainId'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
    tableName: 'PassengerTrain',
    timestamps: true 
});


PassengerTrain.belongsTo(Passenger, { foreignKey: 'passengerId' });
PassengerTrain.belongsTo(Train, { foreignKey: 'trainId' });

module.exports = PassengerTrain;
