module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TrainStation', {
      Trainid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'train', 
          key: 'TrainId',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      StationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'station', 
          key: 'StationId',
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
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('TrainStation');
  }
};
