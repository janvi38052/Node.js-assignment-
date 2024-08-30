const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Passenger extends Model {
    static associate(models) {
      Passenger.hasMany(models.PassengerStation, { foreignKey: 'PassengerId' });
    }
  }

  Passenger.init({
    PassengerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deletedAt: DataTypes.DATE,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Passenger',
    timestamps: true
  });

  return Passenger;
};
