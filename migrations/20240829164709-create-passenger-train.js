module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PassengerTrain', {
      passengerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Passenger',
          key: 'passengerId'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      trainId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Train',
          key: 'trainId'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
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
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PassengerTrain');
  }
};
