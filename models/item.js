'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    long: DataTypes.DECIMAL,
    lat: DataTypes.DECIMAL,
    place_id: DataTypes.STRING,
    place_name: DataTypes.STRING,
    photo_url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return Item;
};
