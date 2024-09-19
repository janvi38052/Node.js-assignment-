const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class TrainStation extends Model {
    static associate(models) {
      TrainStation.belongsTo(models.Train, {
        foreignKey: 'TrainId',
        as: 'train',
      });
      TrainStation.belongsTo(models.Station, {
        foreignKey: 'StationId',
        as: 'station',
      });
    }
  }

  TrainStation.init({
    TrainId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'train', 
        key: 'TrainId',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    StationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'station', 
        key: 'StationId',
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
