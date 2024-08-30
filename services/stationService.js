const Station = require('../models/station')(require('../db'));
const statusCode = require('../utils/statusCode');
const errorMessage = require('../utils/errorMessage');

class StationService {
  async createStation(data) {
    if (!data.createdBy || !data.updatedBy) {
      throw {
        status: statusCode.BAD_REQUEST,
        message: errorMessage.REQUIRED_FIELDS_MISSING
      };
    }
    return await Station.create(data);
  }

  async getAllStations() {
    return await Station.findAll();
  }

  async getStationById(stationId) {
    const station = await Station.findByPk(stationId);
    if (!station) {
      throw {
        status: statusCode.NOT_FOUND,
        message: errorMessage.STATION_NOT_FOUND
      };
    }
    return station;
  }

  async updateStation(stationId, data) {
    const station = await this.getStationById(stationId);
    if (!data.updatedBy) {
      throw {
        status: statusCode.BAD_REQUEST,
        message: errorMessage.REQUIRED_FIELDS_MISSING
      };
    }
    return await station.update(data);
  }

  async deleteStation(stationId) {
    const station = await this.getStationById(stationId);
    return await station.destroy();
  }
}

module.exports = new StationService();
