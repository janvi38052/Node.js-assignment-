module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('RailwayCompany', {
      railwayCompanyId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      headquarters: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      establishedYear: {
        type: Sequelize.INTEGER,
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('RailwayCompany');
  },
};
