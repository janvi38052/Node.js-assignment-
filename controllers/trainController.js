const Train = require('../models/train');

exports.createTrain = async (req, res) => {
  try {
    const train = await Train.create(req.body);
    res.status(201).json(train);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllTrains = async (req, res) => {
  try {
    const trains = await Train.findAll();
    res.status(200).json(trains);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTrainById = async (req, res) => {
  try {
    const train = await Train.findByPk(req.params.id);
    if (train) {
      res.status(200).json(train);
    } else {
      res.status(404).json({ message: 'Train not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateTrain = async (req, res) => {
  try {
    const [updated] = await Train.update(req.body, {
      where: { TrainId: req.params.id }
    });
    if (updated) {
      const updatedTrain = await Train.findByPk(req.params.id);
      res.status(200).json(updatedTrain);
    } else {
      res.status(404).json({ message: 'Train not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTrain = async (req, res) => {
  try {
    const deleted = await Train.destroy({
      where: { TrainId: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Train not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
