const { DataTypes } = require('sequelize');
const sequelize = require('../db'); 
const Passenger = require('./passenger'); 
const Train = require('./train'); 

const PassengerTrain = sequelize.define('PassengerTrain', {
    PassengerId: {  
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Passenger', 
            key: 'PassengerId'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    trainId: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Train',
            key: 'TrainId'
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


PassengerTrain.belongsTo(Passenger, { foreignKey: 'PassengerId' });
PassengerTrain.belongsTo(Train, { foreignKey: 'TrainId' });

module.exports = PassengerTrain;
