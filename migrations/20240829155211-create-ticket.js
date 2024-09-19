module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Ticket', {
      ticketId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      PassengerId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Passenger',
          key: 'PassengerId',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      trainId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Train',
          key: 'TrainId',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      startTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      source: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      destination: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      noOfSeats: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dateTime: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('Ticket');
  },
};
