module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Booking', {
      BookingId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      PassengerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Passenger',
          key: 'PassengerId',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      TrainId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Train',
          key: 'TrainId',
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
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Booking');
  },
};
