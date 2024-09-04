const { Op } = require('sequelize');
const Train = require('../models/train'); 
const statusCode = require('../utils/statusCode');
const errorMessage = require('../utils/errorMessage');

class TrainService {
  async createTrain(data) {
    if (!data.createdBy || !data.updatedBy) {
      throw {
        status: statusCode.BAD_REQUEST,
        message: errorMessage.REQUIRED_FIELDS_MISSING
      };
    }
    return await Train.create(data);
  }

  async getAllTrains(page = 1, pageSize = 10) {
    const offset = (page - 1) * pageSize;

    const { count, rows } = await Train.findAndCountAll({
      limit: pageSize,
      offset: offset,
      order: [['TrainId', 'ASC']],
    });

    return {
      total: count,
      totalPages: Math.ceil(count / pageSize),
      currentPage: page,
      pageSize: pageSize,
      trains: rows,
    };
  }

  async searchTrains(query, page = 1, pageSize = 10) {
    const offset = (page - 1) * pageSize;

    const { count, rows } = await Train.findAndCountAll({
      where: {
        [Op.or]: [
          { source: { [Op.like]: `%${query}%` } },
          { destination: { [Op.like]: `%${query}%` } }
        ]
      },
      limit: pageSize,
      offset: offset,
      order: [['TrainId', 'ASC']],
    });

    return {
      total: count,
      totalPages: Math.ceil(count / pageSize),
      currentPage: page,
      pageSize: pageSize,
      trains: rows,
    };
  }

  async getTrainById(trainId) {
    const train = await Train.findByPk(trainId);
    if (!train) {
      throw {
        status: statusCode.NOT_FOUND,
        message: errorMessage.STATION_NOT_FOUND 
      };
    }
    return train;
  }

  async updateTrain(trainId, data) {
    const train = await this.getTrainById(trainId);
    if (!data.updatedBy) {
      throw {
        status: statusCode.BAD_REQUEST,
        message: errorMessage.REQUIRED_FIELDS_MISSING
      };
    }
    return await train.update(data);
  }

  async deleteTrain(trainId) {
    const train = await this.getTrainById(trainId);
    return await train.destroy();
  }
}

module.exports = new TrainService();
