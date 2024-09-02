const { Sequelize } = require('sequelize');

// Initialize Sequelize with database configuration
// Amitesh: use env variables.
const sequelize = new Sequelize('test', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Set to `true` for debugging SQL queries
});

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

module.exports = sequelize;
