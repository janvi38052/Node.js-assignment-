module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Booking', {
      bookingId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      passengerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Passenger',
          key: 'passengerId',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      trainId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Train',
          key: 'trainId',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      bookDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      numberOfSeats: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      updatedBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Booking');
  },
};
