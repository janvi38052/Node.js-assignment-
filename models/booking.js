const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Booking extends Model {
    static associate(models) {
      
      Booking.belongsTo(models.Passenger, { foreignKey: 'PassengerId' });
      Booking.belongsTo(models.Train, { foreignKey: 'TrainId' });
    }
  }

  Booking.init({
    BookingId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    PassengerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    TrainId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
   
    deletedAt: DataTypes.DATE,
    createdBy: DataTypes.INTEGER,
    updatedBy: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Booking',
    timestamps: true
  });

  return Booking;
};
