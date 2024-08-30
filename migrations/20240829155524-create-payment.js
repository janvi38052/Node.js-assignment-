module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Payment', {
      paymentId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      paymentMethod: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
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
    await queryInterface.dropTable('Payment');
  },
};
