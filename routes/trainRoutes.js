const express = require('express');
const TrainController = require('../controllers/trainController');

const router = express.Router();

router.post('/', TrainController.createTrain); // Create a train
router.get('/', TrainController.getAllTrains); // Get all trains with pagination
router.get('/search', TrainController.searchTrains); // Search trains by query
router.get('/:id', TrainController.getTrainById); // Get a train by ID
router.put('/:id', TrainController.updateTrain); // Update a train by ID
router.delete('/:id', TrainController.deleteTrain); // Delete a train by ID

module.exports = router;
