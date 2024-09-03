const { Sequelize } = require('sequelize');
require('dotenv').config(); 

// Amitesh: use env variables.

const sequelize = new Sequelize(
  process.env.DB_NAME,       
  process.env.DB_USER,       
  process.env.DB_PASSWORD,   
  {
    host: process.env.DB_HOST,      
    dialect: process.env.DB_DIALECT, 
    logging: true, 
  }
);

<<<<<<< HEAD
=======
// Initialize Sequelize with database configuration
// Amitesh: use env variables.
const sequelize = new Sequelize('test', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // Set to `true` for debugging SQL queries
});
>>>>>>> 02e36f4af3a378529ec4c0d70b54cb1cae0d724c

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
