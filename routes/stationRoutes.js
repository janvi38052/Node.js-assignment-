const express = require('express');
const StationController = require('../controllers/stationController');

const router = express.Router();

router.post('/', StationController.createStation); // Create a station
router.get('/', StationController.getAllStations); // Get all stations
router.get('/:id', StationController.getStationById); // Get a station by ID
router.put('/:id', StationController.updateStation); // Update a station by ID
router.delete('/:id', StationController.deleteStation); // Delete a station by ID

module.exports = router;
