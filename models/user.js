'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true, allowNull: false},
    photo: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // User.hasMany(models.Item);
      }
    }

  });
  return User;
};
