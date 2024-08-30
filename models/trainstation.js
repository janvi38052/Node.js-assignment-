const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class TrainStation extends Model {
    static associate(models) {
    
      TrainStation.belongsTo(models.Train, {
        foreignKey: 'Trainid',
        as: 'train',
      });
      TrainStation.belongsTo(models.Station, {
        foreignKey: 'Stationid',
        as: 'station',
      });
    }
  }

  TrainStation.init({
    Trainid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Train', 
        key: 'Trainid',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    Stationid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Station', 
        key: 'Stationid',
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
    sequelize,
    modelName: 'TrainStation',
    timestamps: true,
    tableName: 'TrainStation',
  });

  return TrainStation;
};
