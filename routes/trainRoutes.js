const express = require('express');
const TrainController = require('../controllers/trainController');

const router = express.Router();

router.post('/', TrainController.createTrain); 
router.get('/', TrainController.getAllTrains); 
router.get('/search', TrainController.searchTrains); 
router.get('/:id', TrainController.getTrainById); 
router.put('/:id', TrainController.updateTrain); 
router.delete('/:id', TrainController.deleteTrain); 

module.exports = router;
