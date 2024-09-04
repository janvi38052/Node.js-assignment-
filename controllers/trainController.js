const trainService = require('../services/trainService');
const statusCode = require('../utils/statusCode');

class TrainController {
  async createTrain(req, res, next) {
    try {
      const train = await trainService.createTrain(req.body);
      res.status(statusCode.CREATED).json(train);
    } catch (error) {
      next(error);
    }
  }

  async getAllTrains(req, res, next) {
    try {
      const page = parseInt(req.query.page, 10) || 1;
      const pageSize = parseInt(req.query.pageSize, 10) || 10;

      const trains = await trainService.getAllTrains(page, pageSize);
      res.status(statusCode.OK).json(trains);
    } catch (error) {
      next(error);
    }
  }

  async searchTrains(req, res, next) {
    try {
      const query = req.query.q || '';
      const page = parseInt(req.query.page, 10) || 1;
      const pageSize = parseInt(req.query.pageSize, 10) || 10;

      const trains = await trainService.searchTrains(query, page, pageSize);
      res.status(statusCode.OK).json(trains);
    } catch (error) {
      next(error);
    }
  }

  async getTrainById(req, res, next) {
    try {
      const train = await trainService.getTrainById(req.params.id);
      res.status(statusCode.OK).json(train);
    } catch (error) {
      next(error);
    }
  }

  async updateTrain(req, res, next) {
    try {
      const train = await trainService.updateTrain(req.params.id, req.body);
      res.status(statusCode.OK).json(train);
    } catch (error) {
      next(error);
    }
  }

  async deleteTrain(req, res, next) {
    try {
      await trainService.deleteTrain(req.params.id);
      res.status(statusCode.NO_CONTENT).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new TrainController();
