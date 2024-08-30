const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Station', {
    StationId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,          
        len: [1, 255],           
        isAlpha: true            
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,         
        len: [1, 255],         
        isAlpha: true           
      }
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: true,            
        isAfter: "2000-01-01"   
      }
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,            
        min: 1,                  
        max: 9999               
      }
    },
    updatedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,         
        min: 1,                  
        max: 9999                
      }
    }
  }, {
    timestamps: true,
    tableName: 'Stations'
  });
};
