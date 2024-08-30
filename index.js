const express = require('express');
const sequelize = require('./db');
const errorHandler = require('./middleware/errorHandler');
const stationRoutes = require('./routes/stationRoutes');
const app = express();
const port = 3009;


app.use(express.json()); 


app.use('/stations', stationRoutes);


async function syncDatabase() {
  try {
    await sequelize.sync({ force: false });
    console.log('Database synced successfully.');
  } catch (error) {
    console.error('Error syncing the database:', error);
  }
}


app.use(errorHandler); 

app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}/`);
  await syncDatabase();
});

