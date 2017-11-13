'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    name: {type: DataTypes.STRING, allowNull: false},
    long: DataTypes.DECIMAL,
    lat: DataTypes.DECIMAL,
    place_id: DataTypes.STRING,
    place_name: {type: DataTypes.STRING, allowNull:false},
    photo_url: DataTypes.STRING,
    contestId: DataTypes.INTEGER,
    voteCount: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Item.belongsToMany(models.User, { through: models.Vote });
      }
    }
  });

  return Item;
};
