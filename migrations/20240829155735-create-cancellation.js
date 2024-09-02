module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cancellation', {
      cancellationId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      ticketId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Ticket',
          key: 'ticketId',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      cancellationDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      reason: {
        type: Sequelize.STRING(255),
        allowNull: true,
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
    await queryInterface.dropTable('Cancellation');
  },
};
