'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contest = sequelize.define('Contest', {
    name: { type: DataTypes.STRING, allowNull: false }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
          Contest.hasMany(models.Item);
      }
    }
  });
  return Contest;
};
