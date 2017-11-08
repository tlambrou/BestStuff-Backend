'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    name: {type: DataTypes.STRING, allowNull: false},
    long: DataTypes.DECIMAL,
    lat: DataTypes.DECIMAL,
    place_id: DataTypes.STRING,
    place_name: {type: DataTypes.STRING, allowNull:false},
    photo_url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Item.belongsTo(models.Contest);
      }
    }
  });

  return Item;
};
