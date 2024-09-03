const express = require('express');
const StationController = require('../controllers/stationController');

const router = express.Router();

// Define routes
router.post('/', StationController.createStation); // Create a station
router.get('/', StationController.getAllStations); // Get all stations with pagination
router.get('/search', StationController.searchStations); // Search stations by query
router.get('/:id', StationController.getStationById); // Get a station by ID
router.put('/:id', StationController.updateStation); // Update a station by ID
router.delete('/:id', StationController.deleteStation); // Delete a station by ID

module.exports = router;
