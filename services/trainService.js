const Train = require('../models/train'); 

const createTrain = async (data) => {
  return await Train.create(data);
};

const getAllTrains = async () => {
  return await Train.findAll();
};

const getTrainById = async (id) => {
  return await Train.findByPk(id);
};

const updateTrain = async (id, data) => {
  const train = await Train.findByPk(id);
  if (train) {
    return await train.update(data);
  }
  return null;
};

const deleteTrain = async (id) => {
  const train = await Train.findByPk(id);
  if (train) {
    return await train.destroy();
  }
  return null;
};

module.exports = {
  createTrain,
  getAllTrains,
  getTrainById,
  updateTrain,
  deleteTrain,
};
