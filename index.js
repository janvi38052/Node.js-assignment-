const express = require('express');
const sequelize = require('./db');
const errorHandler = require('./middleware/errorHandler');
const stationRoutes = require('./routes/stationRoutes');
const trainRoutes = require('./routes/trainRoutes');



const app = express();


app.use(express.json());


app.use('/stations', stationRoutes);
app.use('/trains', trainRoutes);


app.use(errorHandler);


async function syncDatabase() {
  try {
    await sequelize.sync({ force: false }); 
    console.log('Database synced successfully.');
  } catch (error) {
    console.error('Error syncing the database:', error);
  }
}


const port = process.env.PORT || 3005;
app.listen(port, async () => {
  console.log(`Server running at http://localhost:${port}/`);
  await syncDatabase();
});
















