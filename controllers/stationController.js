const stationService = require('../services/stationService');
const statusCode = require('../utils/statusCode');

class StationController {
  async createStation(req, res, next) {
    try {
      const station = await stationService.createStation(req.body);
      res.status(statusCode.CREATED).json(station);
    } catch (error) {
      next(error);
    }
  }

  async getAllStations(req, res, next) {
    try {
      const page = parseInt(req.query.page, 10) || 1;
      const pageSize = parseInt(req.query.pageSize, 10) || 10;

      const stations = await stationService.getAllStations(page, pageSize);
      res.status(statusCode.OK).json(stations);
    } catch (error) {
      next(error); 
    }
  }

  async getStationById(req, res, next) {
    try {
      const station = await stationService.getStationById(req.params.id);
      res.status(statusCode.OK).json(station);
    } catch (error) {
      next(error);
    }
  }

  async updateStation(req, res, next) {
    try {
      const station = await stationService.updateStation(req.params.id, req.body);
      res.status(statusCode.OK).json(station);
    } catch (error) {
      next(error); 
    }
  }

  async deleteStation(req, res, next) {
    try {
      await stationService.deleteStation(req.params.id);
      res.status(statusCode.NO_CONTENT).send(); 
    } catch (error) {
      next(error); 
    }
  }


  async searchStations(req, res, next) {
    try {
      const query = req.query.q || ''; 
      const page = parseInt(req.query.page, 10) || 1;
      const pageSize = parseInt(req.query.pageSize, 10) || 10;

      const stations = await stationService.searchStations(query, page, pageSize);
      res.status(statusCode.OK).json(stations);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new StationController();
